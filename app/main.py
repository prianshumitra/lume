from fastapi import FastAPI, status, HTTPException, Depends
from typing import Optional, List
import psycopg2
from psycopg2.extras import RealDictCursor
import time #to use time in try except block
from . import models,schemas,utils
from sqlalchemy.orm import Session
from .database import engine, get_db


models.Base.metadata.create_all(bind=engine) #to create tables in database

app = FastAPI()
#app->instance



#### anything above this can be copied for any project


#connect to database
while True:
    try:
        conn = psycopg2.connect(host="localhost",
                               database="fast-api",
                               user="postgres",
                               password="sql",
                               cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print("Connection to PostgreSQL DB successful")
        break

    except Exception as error:
        print("Connection to PostgreSQL DB unsuccessful", error, "\n")
        time.sleep(2)


#global variable to store data in form of dictionary
my_posts = [{"title": "title of post 1",
             "content": "content of post 1",
             "id": 1
             },
            {"title": "favourite foods",
             "content": "I like pizza",
             "id": 2
             }]

def find_post(id):
    for post in my_posts:
        if post["id"] == id:
            return post
    return None

def find_index_post(id):
    for index,post in enumerate(my_posts):
        if post["id"] == id:
            return index

# @->decorator
# app->instance
# get->http method(there are many methods)
# /->urlpath
@app.get("/")
def root():
    return {"message": "Hello Krish"}


# =-GET ALL POSTS-=
@app.get("/posts",status_code=status.HTTP_200_OK,response_model=List[schemas.Post]) #can also be done with list[schemas.Post] without importing List
def get_posts(db: Session = Depends(get_db)):

#----------------without using sqlalchemy------------------------------------
#
    # cursor.execute("""SELECT * FROM posts""")
    # posts = cursor.fetchall()
#
#----------------------------------------------------------------------------

#------------------with using sqlalchemy-------------------------------------
#
    posts =  db.query(models.Post).all()
    print(posts)
    return posts
#
#----------------------------------------------------------------------------


# =-CREATE POSTS-=
@app.post("/createposts", status_code=status.HTTP_201_CREATED, response_model=schemas.Post)
def create_posts(post: schemas.PostCreate, db: Session = Depends(get_db)):

#-----------------without using sqlalchemy---------------------------------------------------------------------------------------------
#
    # cursor.execute("""INSERT INTO posts (title,content,published,rating) VALUES (%s,%s,%s,%s) RETURNING *""",
    #                (post.title,post.content,post.published,post.rating))
    # new_post = cursor.fetchone()
    # conn.commit()
#
#---------------------------------------------------------------------------------------------------------------------------------------

#----------------with using sqlalchemy--------------------------------------------------------------------------------------
 #
    # new_posts=models.Post(title=post.title,   --> easy when less fields are given
    #                       content=post.content,
    #                       published=post.published)
    #                       db.add(new_posts)
    #                       db.commit()
    #                       db.refresh(new_posts)
#
#----------------------------------------------------------------------------------------------------------------------------

#-----------------when many fields present and using sqlalchemy--------------------------------------------------------------
#
    new_posts = models.Post(**post.model_dump())
    db.add(new_posts)
    db.commit()
    db.refresh(new_posts)
    return new_posts
#
#----------------------------------------------------------------------------------------------------------------------------


# =-GET LATEST POST-=
#--------------------------------------------
@app.get("/posts/latest")
def get_latest():
    post_latest = my_posts[-1]
    return {"latest_post": post_latest}
#
#---------------------------------------------

# =-GET SINGLE POST BY ID-=
@app.get("/posts/{id}", response_model=schemas.Post) #individual post
def get_post(id: int, db: Session = Depends(get_db)):
#------------------without using orm (sqlalchemy)-------------------------------------------------------
#
    # cursor.execute("""SELECT * FROM posts WHERE id = %s""",
    #                (str(id)))
    # post = cursor.fetchone()
#
#---------------------------------------------------------------------------------------------------------
#---------------------with using sqlalchemy---------------------------------------------------------------
#
    post = db.query(models.Post).filter(models.Post.id == id).first() #filter is same as WHERE in sql
    #first->to get only one row of occurence
    #all->to get all rows of occurence
    print(post)

    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")
    return post
#
#----------------------------------------------------------------------------------------------------------


# =-DELETE POST-=
@app.delete("/posts/{id}",status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int, db: Session = Depends(get_db)):
#-------------------------without using sqlalchemy----------------------------------------------------------
#
    # cursor.execute("""DELETE FROM posts WHERE id = %s RETURNING *""",(str(id)))
    # deleted_post = cursor.fetchone()
    # conn.commit()
    # if deleted_post is None:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
    #                         detail=f"Post with id {id} not found")
#
#----------------------------------------------------------------------------------------------------------
#--------------------------with using sqlalchemy-----------------------------------------------------------
    post = db.query(models.Post).filter(models.Post.id == id).first()
    if post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")
    db.delete(post)
    db.commit()

    return {"message": f"Post with id {id} deleted"}
#
#----------------------------------------------------------------------------------------------------------


# =-UPDATE POST-=
@app.put("/posts/{id}", response_model= schemas.Post) #update post
def update_post(id: int, post: schemas.PostCreate, db: Session = Depends(get_db)):
#--------------------without using sqlalchemy---------------------------------------------------------------------------------
#
    # cursor.execute("""UPDATE posts SET title = %s, content = %s, published = %s, rating = %s WHERE id = %s RETURNING *""",
    #               (post.title,post.content,post.published,post.rating,str(id)))
    # updated_post = cursor.fetchone()
    # conn.commit()
    # if updated_post is None:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
    #                         detail=f"Post with id {id} not found")
#
#-----------------------------------------------------------------------------------------------------------------------------
#------------------------with using sqlalchemy--------------------------------------------------------------------------------------
#
    post_query = db.query(models.Post).filter(models.Post.id == id)
    existing_post = post_query.first()

    if existing_post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")

    post_query.update(post.model_dump())
    db.commit()

    return post_query.first()
#
#------------------------------------------------------------------------------------------------------------------------------

# =-CREATE USER-=
@app.post("/users",status_code=status.HTTP_201_CREATED,response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):

    #hash the password - user.password
    hashed_password = utils.hash(user.password)
    user.password = hashed_password

    new_user = models.User(**user.model_dump())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user