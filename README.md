# React Protected Routes with Context API

This project demonstrates how to implement authentication and protected routes in a React application using the Context API and React Router.

---

## 🚀 Features

- User authentication using React Context API
- Login and logout functionality
- Protected routes using a custom `ProtectedRoute` component
- Automatic redirection to login page for unauthenticated users
- Simple and clean routing structure

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Context API**

---


---

## 🧠 How Authentication Works

1. The user clicks the **Login** button.
2. The `login()` function updates the `user` state in `AuthContext`.
3. The app redirects the user to `/dashboard`.
4. `ProtectedRoute` checks if the user exists:
   - If **yes** → Dashboard is displayed
   - If **no** → Redirects to `/login`

---

## 🧭 Routing Overview

| Route        | Access    | Description    |
|--------------|-----------|----------------|
| `/`          | Public    | Home page      |
| `/login`     | Public    | Login page     |
| `/dashboard` | Protected | Dashboard page |

---

## 🔐 ProtectedRoute Logic

- Uses `useContext(AuthContext)`
- Checks if `user` is `null`
- Redirects unauthenticated users to `/login`

---

## ▶️ How to Run the Project

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
npm start

4. Open http://localhost:3000 in the browser
