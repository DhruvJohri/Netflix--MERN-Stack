<div align="center">

<img src="https://img.shields.io/badge/Netflix_2.0-E50914?style=for-the-badge&logo=netflix&logoColor=white" alt="Netflix 2.0" height="40"/>

# Netflix 2.0

**A full-stack MERN streaming platform with secure JWT auth, TMDB integration, and production deployment.**

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://netflix-mern-stack-git-main-dhruv-johris-projects.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend_API-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://netflix-mern-stack-ew3s.onrender.com)

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

</div>

---

## Overview

Netflix 2.0 is a production-deployed MERN stack application replicating core streaming platform functionality. It features HttpOnly cookie-based JWT authentication across Vercel (frontend) and Render (backend), a TMDB-powered movie catalog, and Redux Toolkit for global state.

---

## Features

- **Auth** — Signup, login, logout with HttpOnly cookie JWT sessions
- **Movie Catalog** — Now Playing, Popular, Top Rated, Upcoming via TMDB API
- **Trailer Playback** — Embedded modal trailers fetched per movie
- **Search** — Real-time TMDB movie search
- **Cross-Domain Cookies** — Secure `sameSite=none` production auth between Vercel + Render
- **State Management** — Redux Toolkit slices for user, movies, and search

---

## Architecture

```
Browser (React + Redux)
        │
        │  HTTPS + withCredentials: true
        ▼
  Vercel — Frontend (CDN)
        │
        │  Cross-origin API calls
        ▼
  Render — Backend (Node/Express)
        │
     ┌──┴──┐
     ▼     ▼
MongoDB   TMDB API
 Atlas    (Movies)
```

**Design principles:** Stateless REST API · HttpOnly cookie auth · External API for content · CDN-delivered frontend · Environment-driven config

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Redux Toolkit, React Router v6, Axios, TailwindCSS, MUI |
| Backend | Node.js, Express, Mongoose, JWT, bcryptjs, cookie-parser, cors |
| Database | MongoDB Atlas |
| External API | TMDB API (V4 Bearer Token) |
| Deployment | Vercel (frontend), Render (backend) |

---

## Project Structure

```
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
```

---

## Local Setup

**Prerequisites:** Node.js, MongoDB Atlas URI, TMDB Bearer Token

```bash
# Clone
git clone https://github.com/your-username/netflix-mern-stack.git
cd netflix-mern-stack
```

**Backend**
```bash
cd backend
npm install
```

Create `backend/.env`:
```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

```bash
npm start
```

**Frontend**
```bash
cd netflix
npm install
```

Create `netflix/.env`:
```env
REACT_APP_API_END_POINT=http://localhost:5000
REACT_APP_TMDB_BEARER_TOKEN=your_tmdb_bearer_token
```

```bash
npm start
```

---

## Deployment

### Vercel (Frontend)

| Setting | Value |
|---|---|
| Root Directory | `netflix` |
| Build Command | `npm run build` |
| Output Directory | `build` |

**Environment variables:** `REACT_APP_API_END_POINT`, `REACT_APP_TMDB_BEARER_TOKEN`

### Render (Backend)

| Setting | Value |
|---|---|
| Root Directory | `backend` |
| Build Command | `npm install` |
| Start Command | `npm start` |

**Environment variables:** `MONGO_URI`, `JWT_SECRET`, `CORS_ORIGIN`, `NODE_ENV=production`

---

## Security

- Passwords hashed with **bcryptjs**
- JWT stored in **HttpOnly cookies** (not localStorage) — prevents XSS token theft
- Cookie flags: `sameSite=none`, `secure=true` in production
- **Strict CORS** — exact origin validation, no wildcards
- No secrets committed to version control

---

## Common Issues

| Error | Fix |
|---|---|
| 404 on `/login` or `/register` | Ensure `REACT_APP_API_END_POINT` includes `/api/v1/user` |
| Blocked by CORS | Check `CORS_ORIGIN` for trailing slash or mismatch |
| `Cannot GET /` on Render | Expected — no root route on the backend |

---

## Roadmap

- [ ] Rate limiting middleware
- [ ] Redis caching layer
- [ ] Role-based authorization
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Unit & integration tests

---

## Author

**Dhruv Johri** — Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/dhruv-johri)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/dhruv-johri)

---

<div align="center">

If this helped you, give it a ⭐

</div>
