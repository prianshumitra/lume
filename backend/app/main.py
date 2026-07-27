from fastapi import FastAPI
from .routers import post,user,auth,vote
from fastapi.middleware.cors import CORSMiddleware


#models.Base.metadata.create_all(bind=engine) #to create tables in database when no migration tool present(alembic)

app = FastAPI()
#app->instance

#all the origins that can make requests to our api
origins = ["*"]

# cors middleware -> to allow cross origin requests that means to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#routers
app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(vote.router)

#root
@app.get("/")
def root():
    return {"message": "Hello Krish"}
