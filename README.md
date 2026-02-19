# 🎬 Netflix 2.0 — Production-Grade MERN Streaming Platform

A full-stack Netflix-style streaming platform built using the MERN stack with secure cookie-based authentication, TMDB-powered dynamic movie catalog, scalable Redux state management, and distributed production deployment.

This project demonstrates real-world authentication handling, cross-domain cookie security, environment-driven configuration, and scalable frontend-backend architecture.

---

# 🌍 Live Deployment

Frontend (Vercel)  
https://netflix-mern-stack-git-main-dhruv-johris-projects.vercel.app/

Backend (Render)  
https://netflix-mern-stack-ew3s.onrender.com



---

# ✨ Core Features

- 🔐 Signup / Login / Logout
- 🍪 HttpOnly secure cookie-based JWT session
- 🎥 Movie categories:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- 🔎 TMDB-powered movie search
- ▶️ Trailer modal playback
- 🧠 Redux Toolkit global state management
- 🌍 Cross-origin cookie authentication (Vercel + Render)
- ⚙️ Environment-based configuration for local & production

---

# 🧠 Executive Architecture Overview

This system follows a distributed client-server architecture:

- Frontend deployed on Vercel (CDN edge delivery)
- Backend deployed on Render (Node runtime)
- MongoDB Atlas for persistent storage
- TMDB API as external content provider
- Secure cross-domain authentication via HttpOnly cookies

Stateless backend design ensures horizontal scalability.

---

# 🏗 System Architecture Diagram

                ┌──────────────────────────┐
                │        End User          │
                │  (Browser - React App)  │
                └─────────────┬────────────┘
                              │
                              │ HTTPS Requests
                              ▼
                ┌──────────────────────────┐
                │     Vercel (Frontend)    │
                │  React + Redux + Router  │
                └─────────────┬────────────┘
                              │
                withCredentials: true
                              │
                              ▼
                ┌──────────────────────────┐
                │     Render (Backend)     │
                │     Node + Express       │
                │  JWT + Cookie Strategy   │
                └─────────────┬────────────┘
                              │
                 ┌────────────┴────────────┐
                 ▼                         ▼
    ┌──────────────────────┐    ┌──────────────────────┐
    │   MongoDB Atlas      │    │      TMDB API        │
    │  User Data Storage   │    │  Movie Catalog Data  │
    └──────────────────────┘    └──────────────────────┘

---

# 🛠 Tech Stack

## Frontend
- React 18
- Redux Toolkit
- React Router v6
- Axios
- TailwindCSS
- MUI (Material UI)

## Backend
- Node.js
- Express
- MongoDB (Mongoose)
- jsonwebtoken (JWT)
- bcryptjs
- cookie-parser
- cors

## Database
- MongoDB Atlas

## External API
- TMDB API (V4 Bearer Token)

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 🔐 Authentication & Security Design

### Authentication Strategy
- Password hashed using bcryptjs
- JWT generated upon login
- JWT stored in HttpOnly cookie
- Cookie settings:
  - sameSite=none
  - secure=true (production)
- Frontend sends withCredentials: true

### Why HttpOnly Cookies?
- Prevents XSS token theft
- More secure than localStorage
- Production-compatible for cross-site auth

### CORS Protection
Backend validates exact allowed origin using:

No wildcard origins allowed.

---

# 🔄 End-to-End Flow

## 1️⃣ Authentication Flow

1. User opens `/`
2. Chooses Signup or Login
3. Frontend sends:
   - POST /api/v1/user/register
   - POST /api/v1/user/login
4. Backend validates & hashes password
5. JWT signed and stored in HttpOnly cookie
6. Redux stores user
7. Redirect to `/browse`

---

## 2️⃣ Browse Page Data Flow

- Custom hooks fetch:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- TMDB responses dispatched into movieSlice
- UI renders hero + movie rows

---

## 3️⃣ Trailer Playback Flow

1. User selects movie
2. TMDB `/movie/{id}/videos` called
3. Trailer selected
4. Redux updates modal state
5. Embedded trailer rendered

---

## 4️⃣ Search Flow

1. User types query
2. TMDB search endpoint called
3. Results stored in searchSlice
4. Dynamic rows rendered

---

## 5️⃣ Logout Flow

1. GET /api/v1/user/logout
2. Backend clears cookie
3. Redux resets user
4. Redirect to `/`

---

## 📁 Project Structure

netflix2.0/  
├── backend/  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   └── server.js  
└── netflix/  
    └── src/  
        ├── components/  
        ├── hooks/  
        ├── redux/  
        └── pages/  

---

# 🚀 Deployment Configuration

## Vercel (Frontend)

- Root Directory: netflix
- Build Command: npm run build
- Output Directory: build
- Required Env:
  - REACT_APP_API_END_POINT
  - REACT_APP_TMDB_BEARER_TOKEN


## Render (Backend)

- Root Directory: backend
- Build Command: npm install
- Start Command: npm start
- Required Env:
  - MONGO_URI
  - JWT_SECRET
  - CORS_ORIGIN
  - NODE_ENV=production

---

# ❗ Common Errors + Fixes

404 on /login or /register  
→ Missing `/api/v1/user` in API base

Blocked by CORS  
→ CORS_ORIGIN mismatch or trailing slash

Cannot GET / on Render  
→ Expected behavior (no root route)

---


# 📈 Performance & Scalability Design

- Stateless backend enables horizontal scaling
- MongoDB Atlas auto-scales
- External movie data reduces database load
- CDN-delivered frontend
- Redux normalization reduces re-renders
- Environment-driven configuration for portability

---


# 🛡 Security Best Practices

- No JWT in localStorage
- HttpOnly cookies
- Password hashing
- Strict CORS validation
- No secrets committed
- Production secure cookie flags

---


# 🎯 System Design Concepts Demonstrated

- Client-server separation
- Stateless REST API
- Token-based authentication
- Cross-domain session management
- Distributed deployment
- External API integration
- Scalable state management
- Environment-based runtime configuration

---


# 🚀 Future Improvements

- Role-based authorization
- Rate limiting middleware
- Redis caching layer
- Docker containerization
- CI/CD pipeline
- Unit & integration testing
- Microservices architecture split

---



# 👨‍💻 Author

Dhruv Johri  
Full Stack Developer | MERN Stack 

---

⭐ If you like this project, give it a star and fork it.
