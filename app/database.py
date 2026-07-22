# Import SQLAlchemy components for database connection and session management
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import time #to use time in try except block
import psycopg2
from psycopg2.extras import RealDictCursor


# #connect to database
# while True:
#     try:
#         conn = psycopg2.connect(host="localhost",
#                                database="fast-api",
#                                user="postgres",
#                                password="sql",
#                                cursor_factory=RealDictCursor)
#         cursor = conn.cursor()
#         print("Connection to PostgreSQL DB successful")
#         break
#
#     except Exception as error:
#         print("Connection to PostgreSQL DB unsuccessful", error, "\n")
#         time.sleep(2)


# Define the connection URL for the PostgreSQL database
SQLALCHEMY_DATABASE_URL = 'postgresql://postgres:sql@localhost:5432/fast-api'

# Create the SQLAlchemy engine that handles the connection to the database
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a SessionLocal class. Each instance of this class will be a database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a Base class for our models to inherit from
Base = declarative_base()

# Dependency function to get a database session for each request, ensuring it's closed after use
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# In any FastAPI project using SQLAlchemy, the following patterns are generally reused:
# 1. Boilerplate Imports & Engine/Session Setup: The use of create_engine, sessionmaker, and 
#    declarative_base is standard. This structure provides a thread-safe way to interact 
#    with the database and defines how models are mapped to tables.
# 2. Base Class: Inheriting from a single Base class allows all models to be registered 
#    in the same metadata object, which is essential for migrations (like Alembic) and 
#    table creation.
# 3. get_db Dependency: This generator pattern is a best practice in FastAPI. It ensures 
#    that a new database session is created for every request and, most importantly, 
#    is reliably closed after the request is finished, preventing connection leaks.
# These components are used "same to same" because they decouple database management 
# from the business logic, making the code modular, scalable, and easy to maintain.