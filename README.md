<div align="center">

<img width="180" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>

<br/><br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=E50914&center=true&vCenter=true&width=500&lines=Full-Stack+MERN+Streaming+Platform;Secure+JWT+%2B+Cookie+Auth;TMDB+Powered+Movie+Catalog;Production+Deployed+%E2%9C%85)](https://git.io/typing-svg)

<br/>

[![🚀 Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Watch%20Now-E50914?style=for-the-badge)](https://netflix-mern-stack-git-main-dhruv-johris-projects.vercel.app/)
[![⚡ Backend API](https://img.shields.io/badge/⚡%20Backend%20API-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://netflix-mern-stack-ew3s.onrender.com)

<br/>

![Stars](https://img.shields.io/github/stars/dhruv-johri/netflix-mern-stack?style=social)
![Forks](https://img.shields.io/github/forks/dhruv-johri/netflix-mern-stack?style=social)
![Watchers](https://img.shields.io/github/watchers/dhruv-johri/netflix-mern-stack?style=social)

<br/>

![Issues](https://img.shields.io/github/issues/dhruv-johri/netflix-mern-stack?color=E50914&style=flat-square)
![Pull Requests](https://img.shields.io/github/issues-pr/dhruv-johri/netflix-mern-stack?color=blueviolet&style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/dhruv-johri/netflix-mern-stack?color=success&style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/dhruv-johri/netflix-mern-stack?style=flat-square&color=blue)
![License](https://img.shields.io/github/license/dhruv-johri/netflix-mern-stack?style=flat-square)
![Made with Love](https://img.shields.io/badge/made%20with-❤️-E50914?style=flat-square)

<br/>

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)

</div>

---

## 🧠 what's this?

A production-deployed Netflix clone on the **MERN stack** — real auth, real movie data, real deployment. HttpOnly cookie-based JWT across separate Vercel + Render domains, TMDB-powered catalog, and Redux Toolkit state management.

No shortcuts. No `localStorage` tokens. Built like it actually ships.

---

## ✨ features

```
🔐  Auth          →  Signup · Login · Logout via HttpOnly cookie JWT
🎬  Catalog       →  Now Playing · Popular · Top Rated · Upcoming (TMDB)
▶️  Trailers      →  Embedded modal playback per movie
🔎  Search        →  Real-time TMDB movie search
🌍  Cross-Domain  →  Secure cookie auth between Vercel + Render
🧠  State         →  Redux Toolkit (user · movies · search slices)
```

---

## 🏗 architecture

```
  [ Browser ]  React + Redux
       │
       │  HTTPS · withCredentials: true
       ▼
  [ Vercel ]  Frontend ─── CDN Edge Delivery
       │
       │  Cross-origin API calls
       ▼
  [ Render ]  Node + Express ─── JWT Cookie Strategy
       │
   ┌───┴───┐
   ▼       ▼
MongoDB   TMDB
 Atlas     API
```

> Stateless backend · strict CORS · no wildcard origins · environment-driven config

---

## 🛠 tech stack

| Layer | Tech |
|---|---|
| **Frontend** | React 18, Redux Toolkit, React Router v6, Axios, TailwindCSS, MUI |
| **Backend** | Node.js, Express, Mongoose, JWT, bcryptjs, cookie-parser, cors |
| **Database** | MongoDB Atlas |
| **External API** | TMDB API — V4 Bearer Token |
| **Deployment** | Vercel (frontend) · Render (backend) |

---

## 📁 project structure

```bash
netflix/
├── backend/
│   ├── controllers/        # route logic
│   ├── models/             # mongoose schemas
│   ├── routes/             # api endpoints
│   └── server.js           # entry point
│
└── netflix/
    └── src/
        ├── components/     # ui components
        ├── hooks/          # custom data-fetching hooks
        ├── redux/          # slices + store
        └── pages/          # route-level pages
```

---

## 🚀 getting started

### prerequisites

- Node.js `v18+`
- MongoDB Atlas URI
- TMDB Bearer Token → [get one here](https://www.themoviedb.org/settings/api)

### clone

```bash
git clone https://github.com/dhruv-johri/netflix-mern-stack.git
cd netflix-mern-stack
```

### backend

```bash
cd backend && npm install
```

create `backend/.env`

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

```bash
npm start
```

### frontend

```bash
cd netflix && npm install
```

create `netflix/.env`

```env
REACT_APP_API_END_POINT=http://localhost:5000
REACT_APP_TMDB_BEARER_TOKEN=your_tmdb_bearer_token
```

```bash
npm start
```

---

## ☁️ deployment

<details>
<summary><b>▶ Vercel — Frontend</b></summary>

<br/>

| Setting | Value |
|---|---|
| Root Directory | `netflix` |
| Build Command | `npm run build` |
| Output Directory | `build` |
| Env vars | `REACT_APP_API_END_POINT` · `REACT_APP_TMDB_BEARER_TOKEN` |

</details>

<details>
<summary><b>▶ Render — Backend</b></summary>

<br/>

| Setting | Value |
|---|---|
| Root Directory | `backend` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Env vars | `MONGO_URI` · `JWT_SECRET` · `CORS_ORIGIN` · `NODE_ENV=production` |

</details>

---

## 🔐 security design

| Practice | Implementation |
|---|---|
| Password hashing | bcryptjs |
| Token storage | HttpOnly cookie — never localStorage |
| XSS prevention | HttpOnly flag blocks all JS access |
| Cookie flags | `sameSite=none` · `secure=true` in prod |
| CORS | Exact-origin validation — no wildcards |
| Secrets | `.env` only — never committed |

---

## ⚠️ known issues

| Symptom | Fix |
|---|---|
| `404` on `/login` or `/register` | `REACT_APP_API_END_POINT` should be the base URL only |
| Blocked by CORS | Check `CORS_ORIGIN` — no trailing slash |
| `Cannot GET /` on Render | Expected — backend has no root route |

---

## 🤝 contributing

```bash
# 1. fork the repo
# 2. create your branch
git checkout -b feature/your-feature

# 3. commit your changes
git commit -m "feat: add your feature"

# 4. push + open a PR
git push origin feature/your-feature
```

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/dhruv-johri/netflix-mern-stack/pulls)
[![Open Issues](https://img.shields.io/github/issues/dhruv-johri/netflix-mern-stack?style=flat-square&color=E50914)](https://github.com/dhruv-johri/netflix-mern-stack/issues)
[![Contributors](https://img.shields.io/github/contributors/dhruv-johri/netflix-mern-stack?style=flat-square&color=orange)](https://github.com/dhruv-johri/netflix-mern-stack/graphs/contributors)

---

<div align="center">

**built by [Dhruv Johri](https://github.com/dhruv-johri)**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dhruv-johri)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dhruv-johri)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefox&logoColor=white)](https://your-portfolio.com)

<br/>

if this helped — drop a ⭐ &nbsp;it's free and means everything

[![Star History Chart](https://img.shields.io/badge/⭐_Star_this_repo-E50914?style=for-the-badge)](https://github.com/dhruv-johri/netflix-mern-stack/stargazers)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=dhruv-johri&color=E50914&style=flat-square&label=profile+views)

</div>
