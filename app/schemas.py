from pydantic import BaseModel,EmailStr
from datetime import datetime

# post to be used in get request to get data from database
class PostBase(BaseModel):
    title: str
    content: str
    published: bool = True

class PostCreate(PostBase):
    pass

#post response model
class Post(PostBase): #response model schema
    id: int
    created_at: datetime

    # to use orm_mode in models.py
    #mandatory for response model
    class Config:
        orm_mode = True

class UserCreate(BaseModel):
    email: EmailStr
    password: str

#user response model
class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime
    class Config:
        orm_mode = True