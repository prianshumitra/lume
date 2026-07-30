<img src="frontend/public/headerlogo.png" width="200" alt="Lume Logo">

> **Where ideas grow.**

Lume is a modern **text-first social media platform** built to encourage meaningful conversations, thoughtful discussions, and the evolution of ideas. Unlike traditional social networks that prioritize fleeting content, Lume focuses on creating a space where users can share insights, engage with communities, and build lasting knowledge through text-based interactions.

---

## 📖 About

Social media today is often centered around short-lived trends, endless scrolling, and media-heavy content. Lume takes a different approach by placing **ideas at the forefront**.

Whether you're a developer sharing knowledge, a student documenting your learning journey, or someone who enjoys meaningful discussions, Lume provides a clean and distraction-free platform where your thoughts matter.

---

## ✨ Features

### 👤 User Authentication
- Secure user registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes and authorization

### 📝 Posts
- Create text-based posts
- Edit your own posts
- Delete your own posts
- View posts from the community
- Search posts

### 👥 User Profiles
- Personalized user profiles
- Account management
- User-specific posts

### 🔒 Security
- JWT Authentication
- Password encryption
- Protected API endpoints
- Ownership validation for posts

### ⚡ Modern Frontend
- Responsive UI
- Clean and minimal design
- Smooth user experience
- Built with reusable React components

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Axios
- React Hook Form
- Zod

### Backend

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Pydantic
- JWT Authentication
- OAuth2
- Passlib (bcrypt)

### Deployment

- Render
- PostgreSQL Database

---

## 📂 Project Structure

```
Lume/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── alembic/
│   ├── requirements.txt
│   └── main.py
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/lume.git
```

```bash
cd lume
```

---

## Backend Setup

Create a virtual environment

```bash
python -m venv venv
```

Activate it

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
alembic upgrade head
```

Start the backend

```bash
uvicorn app.main:app --reload
```

Backend will be available at

```
http://localhost:8000
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Backend

```
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=

SECRET_KEY=
ALGORITHM=
ACCESS_TOKEN_EXPIRE_MINUTES=
```

Frontend

```
VITE_API_URL=
```

---

## 📡 API Highlights

### Authentication

- Register
- Login
- JWT Token Generation

### Users

- Create User
- Get User Profile

### Posts

- Create Post
- Get All Posts
- Get Single Post
- Update Post
- Delete Post
- Search Posts

---

## 🎯 Vision

Lume is built around a simple philosophy:

> **Ideas deserve more than a moment. They deserve to grow.**

Instead of competing for attention through endless scrolling, Lume aims to create an environment where discussions are meaningful, thoughtful, and long-lasting.

Future versions of Lume will continue expanding this vision with richer conversations, improved discovery, and features that encourage learning and collaboration.

---

## 🔮 Roadmap

- [x] User Authentication
- [x] CRUD Posts
- [x] JWT Authorization
- [x] PostgreSQL Integration
- [x] Responsive UI

### Upcoming

- [ ] Comments
- [ ] Likes & Meaningful Reactions
- [ ] Follow Users
- [ ] Notifications
- [ ] Bookmarks
- [ ] Communities
- [ ] Trending Discussions
- [ ] Rich Text Editor
- [ ] Markdown Support
- [ ] AI-powered Search
- [ ] Real-time Messaging
- [ ] Dark/Light Theme

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you'd like to improve Lume:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Prianshu Mitra**

Computer Science Engineer passionate about Full-Stack Development, Backend Engineering, and Building Scalable Applications.

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

# ⭐ If you like this project, consider giving it a star!