from fastapi import FastAPI
from . import models
from .database import engine
from .routers import post,user,auth,vote
from fastapi.middleware.cors import CORSMiddleware


#models.Base.metadata.create_all(bind=engine) #to create tables in database when no migration tool present(alembic)

app = FastAPI()
#app->instance

app.add_middleware(
    CORSMiddleware,
    allow_origins=[],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#routers
app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(vote.router)

@app.get("/")
def root():
    return {"message": "Hello Krish"}