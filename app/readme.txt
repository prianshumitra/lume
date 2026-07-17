FastAPI Project Setup Commands
==============================

1. Create a virtual environment
-------------------------------
Command:
python -m venv venv

Purpose:
Creates a separate Python virtual environment named "venv" for this project.
This keeps project dependencies isolated from the global Python installation.


2. Activate the virtual environment on Windows
----------------------------------------------
Command:
venv\Scripts\activate

Purpose:
Activates the virtual environment so installed packages are added only to this project environment.


3. Install FastAPI
------------------
Command:
pip install fastapi

Purpose:
Installs FastAPI, the web framework used to build API routes and handle HTTP requests.


4. Install Uvicorn
------------------
Command:
pip install uvicorn

Purpose:
Installs Uvicorn, the ASGI server used to run the FastAPI application locally.


5. Install psycopg2
-------------------
Command:
pip install psycopg2

Purpose:
Installs the PostgreSQL database adapter for Python.
It allows the application to connect to a PostgreSQL database.


6. Install SQLAlchemy
---------------------
Command:
pip install sqlalchemy

Purpose:
Installs SQLAlchemy, the ORM used to interact with the database using Python classes and queries instead of raw SQL.


7. Run the FastAPI server
-------------------------
Command:
uvicorn app.main:app --reload

Purpose:
Starts the FastAPI development server.
The --reload option automatically restarts the server when code changes are made.


8. Save installed dependencies
------------------------------
Command:
pip freeze > requirements.txt

Purpose:
Creates a requirements.txt file containing all installed packages and their versions.
This helps recreate the same environment later.


9. Install dependencies from requirements.txt
---------------------------------------------
Command:
pip install -r requirements.txt

Purpose:
Installs all dependencies listed in requirements.txt.
This is useful when setting up the project on another machine.