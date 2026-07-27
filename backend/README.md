# FastAPI Social Media API - Backend

**Live Deployment**: [https://social-media-api-y9fz.onrender.com/](https://social-media-api-y9fz.onrender.com/)

This repository contains the backend infrastructure for the Social Media API. Built with FastAPI, PostgreSQL, and SQLAlchemy, this robust API is engineered for performance, scalability, and security, providing a comprehensive suite of features for content management and user engagement.

## Core Capabilities

- **Secure Identity Management**: Implements OAuth2 authentication with JWT (JSON Web Tokens) for secure user sessions.
- **Dynamic Content Lifecycle**: High-performance CRUD operations for posts with pagination and search functionality.
- **Interactive Engagement Engine**: Real-time voting system (like/unlike) for user interaction.
- **Automated Infrastructure Management**: Systematic database migrations managed via Alembic.
- **Self-Documenting Interface**: Automated OpenAPI (Swagger) and ReDoc documentation for intuitive testing.

## Tech Stack

- **Framework**: [FastAPI](https://fastapi.tiangolo.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [SQLAlchemy](https://www.sqlalchemy.org/)
- **Validation**: [Pydantic](https://docs.pydantic.dev/)
- **Authentication**: [Jose (JWT)](https://python-jose.readthedocs.io/)
- **Migrations**: [Alembic](https://alembic.sqlalchemy.org/)

---

## Setup & Installation

Follow these steps to set up the backend environment locally.

### 1. Prerequisites
- Python 3.8+
- PostgreSQL database

### 2. Virtual Environment
It is recommended to use a virtual environment:
```powershell
# Create virtual environment
python -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on Linux/macOS
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Environment Variables
Create a `.env` file in the `backend/` directory and configure the following:

```env
DATABASE_HOSTNAME=localhost
DATABASE_PORT=5432
DATABASE_NAME=fastapi
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### 5. Database Setup & Migrations
Ensure PostgreSQL is running and the database specified in `.env` exists.

This project uses **Alembic** for schema management. To apply migrations, run:
```bash
alembic upgrade head
```

---

## Running the Application

Start the development server with Uvicorn:

```bash
uvicorn app.main:app --reload
```

The API will be accessible at `http://127.0.0.1:8000`.

---

## API Documentation

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) (Local) or [Live Docs](https://social-media-api-y9fz.onrender.com/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) (Local) or [Live ReDoc](https://social-media-api-y9fz.onrender.com/redoc)

---

## API Endpoints Summary

### Authentication
- `POST /login`: Authenticate and get JWT token.

### Users
- `POST /users/`: Register a new user.
- `GET /users/{id}`: Get user details.

### Posts
- `GET /posts`: List posts (with pagination/search).
- `POST /posts`: Create post (Auth required).
- `GET /posts/{id}`: Get post by ID.
- `DELETE /posts/{id}`: Delete post (Owner only).
- `PUT /posts/{id}`: Update post (Owner only).

### Votes
- `POST /vote/`: Cast or remove a vote (Auth required).

---

## Backend Project Structure

```text
backend/
├── alembic/            # Database migration scripts
├── app/
│   ├── routers/        # API route controllers
│   ├── config.py       # Pydantic Settings configuration
│   ├── database.py     # Database engine and session
│   ├── main.py         # FastAPI entry point
│   ├── models.py       # SQLAlchemy ORM models
│   ├── oauth2.py       # JWT/Auth logic
│   ├── schemas.py      # Pydantic validation models
│   └── utils.py        # Utility functions
├── .env                # Environment variables
├── alembic.ini         # Alembic configuration
└── requirements.txt    # Python dependencies
```
