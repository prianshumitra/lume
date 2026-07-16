from pydantic import BaseModel
from datetime import datetime

# post to be used in get request to get data from database
class PostBase(BaseModel):
    title: str
    content: str
    published: bool = True

class PostCreate(PostBase):
    pass

class Post(PostBase): #response model schema
    id: int
    created_at: datetime

    # to use orm_mode in models.py
    #mandatory for response model
    class Config:
        orm_mode = True