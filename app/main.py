from fastapi import FastAPI, status, HTTPException, Depends
from pydantic import BaseModel #for schema
from typing import Optional
import psycopg2
from psycopg2.extras import RealDictCursor
import time #to use time in try except block
from . import models
from sqlalchemy.orm import Session
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)
app = FastAPI()
#app->instance



#### anything above this can be copied for any project

# title str, content str
class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

#update-post to be used in put request to update data from frontend
class UpdatePost(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

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

@app.get("/sqlalchemy")
def test_posts(db: Session = Depends(get_db)):

    posts = db.query(models.Post).all()
    return {"data":posts}

@app.get("/posts",status_code=status.HTTP_201_CREATED)
def get_posts(db: Session = Depends(get_db)):

    posts =  db.query(models.Post).all()
    # cursor.execute("""SELECT * FROM posts""")
    # posts = cursor.fetchall()
    print(posts)
    return {"data": posts}

@app.post("/createposts")
def create_posts(post: Post,db: Session = Depends(get_db)):

    # cursor.execute("""INSERT INTO posts (title,content,published) VALUES (%s,%s,%s) RETURNING *""",
    #                (post.title,post.content,post.published))
    # new_post = cursor.fetchone()
    # conn.commit()

    new_posts=models.Post(title=post.title,
                          content=post.content,
                          published=post.published)
    db.add(new_posts)
    db.commit()
    db.refresh(new_posts)
    
    return {"data": new_posts}

@app.get("/posts/latest")
def get_latest():
    post_latest = my_posts[-1]
    return {"latest_post": post_latest}

@app.get("/posts/{id}") #individual post
def get_post(id: int):

    cursor.execute("""SELECT * FROM posts WHERE id = %s""",
                   (str(id)))
    post = cursor.fetchone()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")
    return {"post_detail":post}

@app.delete("/posts/{id}",status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int):
    cursor.execute("""DELETE FROM posts WHERE id = %s RETURNING *""",(str(id)))
    deleted_post = cursor.fetchone()
    conn.commit()

    if deleted_post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")

    return {"message": f"Post with id {id} deleted"}

@app.put("/posts/{id}") #update post
def update_post(id: int, post: Post):

    cursor.execute("""UPDATE posts SET title = %s, content = %s, published = %s WHERE id = %s RETURNING *""",
                  (post.title,post.content,post.published,str(id)))
    updated_post = cursor.fetchone()
    conn.commit()

    if updated_post is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id {id} not found")

    return {"data": updated_post}
