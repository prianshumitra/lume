from fastapi import FastAPI, status, HTTPException, Depends
from typing import Optional, List
import psycopg2
from psycopg2.extras import RealDictCursor
import time #to use time in try except block
from . import models,schemas,utils
from sqlalchemy.orm import Session
from .database import engine, get_db
from .routers import post,user

models.Base.metadata.create_all(bind=engine) #to create tables in database

app = FastAPI()
#app->instance
app.include_router(post.router)
app.include_router(user.router)



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


