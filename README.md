# Auth Dashboard App

A full-stack user authentication system built with **React (Vite + Tailwind CSS)** for the frontend and **ASP.NET Core Web API** for the backend. This app allows users to register, log in, and then be redirected to a protected dashboard. It uses session storage to manage login state.

---

## 📁 Project Structure

```

auth-dashboard-starter/
├── frontend/       # React app for signup/login UI
├── backend/        # ASP.NET Core Web API for authentication

````

---

## ✨ Features

- 🔐 User Registration
- 🔑 User Login
- 🧠 Session-based authentication using `sessionStorage`
- 🎨 Beautiful animated UI with Tailwind CSS
- ➡️ Redirect to dashboard after successful login

---

## 🛠️ Tech Stack

### Frontend
- React (with Vite)
- Tailwind CSS
- Axios
- Lucide Icons

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core (optional for persistence)
- JSON-based API

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- .NET SDK (6.0 or 7.0)

---

### ⚙️ Backend Setup (ASP.NET Core)

```bash
cd backend
dotnet run
````

By default, the API will run at:
`http://localhost:5248`

Make sure your CORS settings in `Program.cs` allow the frontend origin (usually `http://localhost:5173`).

---

### 🌐 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file inside `/frontend` and add the following:

```
VITE_API_URL=http://localhost:5248

---

## 📄 Frontend Routes

| Route        | Description               |
| ------------ | ------------------------- |
| `/signup`    | Register a new account    |
| `/login`     | Login to existing account |
| `/dashboard` | Protected user dashboard  |

---

## 📸 Screenshots

> *Add your UI screenshots here once your dashboard is ready.*

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/)
* [Lucide Icons](https://lucide.dev/)

