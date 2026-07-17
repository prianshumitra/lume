from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import models,schemas
from typing import List
from ..database import get_db

router = APIRouter(
    prefix="/posts", #adding prefix to all routes that is (/posts/)
    tags=["posts"]
)

# =-GET ALL POSTS-=
@router.get("/",status_code=status.HTTP_200_OK,response_model=List[schemas.Post]) #can also be done with list[schemas.Post] without importing List
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
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.Post)
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

# =-GET SINGLE POST BY ID-=
@router.get("/{id}", response_model=schemas.Post) #individual post
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
@router.delete("/{id}",status_code=status.HTTP_204_NO_CONTENT)
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
@router.put("/{id}", response_model= schemas.Post) #update post
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
