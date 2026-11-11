# Node.js & Express User Authentication System

A lightweight, straightforward user authentication system built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It implements secure password hashing with **bcrypt** and session management using **JSON Web Tokens (JWT)** stored in HTTP cookies.

## 🚀 Features

* **User Registration (`/create`)**: Hashes user passwords securely using `bcrypt` before saving user details to the database and issues a JWT cookie.
* **User Login (`/login`)**: Validates user credentials against stored password hashes.
* **Session Logout (`/logout`)**: Clears the authentication token cookie and redirects to the login page.
* **Server-Side Rendering**: Uses `EJS` templates for clean signup and login views.

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB / Mongoose (`user-model`)
* **Authentication**: `jsonwebtoken` (JWT), `cookie-parser`
* **Security**: `bcrypt` (Password Hashing)
* **Templating**: EJS

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install express jsonwebtoken bcrypt cookie-parser ejs mongoose
   ```

3. **Start the server:**
   ```bash
   node app.js
   ```
   The server will run on `http://localhost:3000`.

## 🛣️ API Routes

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Renders the user registration (signup) page |
| `POST` | `/create` | Hashes password, creates a new user, and sets a JWT cookie |
| `GET` | `/login` | Renders the login page |
| `POST` | `/login` | Verifies email and compares hashed password |
| `GET` | `/logout` | Clears the JWT cookie and redirects to `/login` |
