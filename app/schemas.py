from pydantic import BaseModel,EmailStr
from datetime import datetime
from typing import Optional
from typing import Literal


# post to be used in get request to get data from database
class PostBase(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

class PostCreate(PostBase):
    pass

#user-response-model
class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime
    class Config:
        orm_mode = True


#post response model
class Post(PostBase): #response model schema
    id: int
    created_at: datetime
    owner_id: int
    owner: UserOut # to get the user details with post just like join query in sql

    # to use orm_mode in models.py
    #mandatory for response model
    class Config:
        orm_mode = True

#post response model with votes
class PostOut(BaseModel):
    Post: Post
    votes: int
    class Config:
        orm_mode = True

#user to be used in post request to create new user
class UserCreate(BaseModel):
    email: EmailStr
    password: str

#user-login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

#user-token
class Token(BaseModel):
    access_token: str
    token_type: str

#token-data
class TokenData(BaseModel):
    id: Optional[str] = None

#voting
class Vote(BaseModel):
    post_id: int
    dir: Literal[0, 1]