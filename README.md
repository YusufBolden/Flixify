# Flixify

Flixify is a full-stack Netflix-inspired streaming platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a modern UI styled with Tailwind CSS, secure user authentication via JSON Web Tokens (JWT), and clean iconography using Lucide. Toast notifications are handled using React-Hot-Toast.

## 🚧 Work in Progress – This project is actively under development. Contributions and feedback are welcome!

## 🌐 Live Demo

Check out the deployed version on GitHub Pages:
👉 COMING SOON!

## 🧰 Tech Stack

Frontend: React.js, Tailwind CSS, Lucide, React-Hot-Toast

Backend: Node.js, Express.js

Authentication: JWT

Database: MongoDB

## 📁 Project Structure:

```
Flixify/
├── backend/          # Express server, API routes, MongoDB models
├── frontend/         # React app, components, pages, styling
├── .env              # Environment variables
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
```

## 🚀 Getting Started

Prerequisites
Node.js (v16 or higher)
MongoDB (local or Atlas)

### Installation

1. Clone the repository:

```
git clone https://github.com/YusufBolden/Flixify.git
cd Flixify
```

2. Install Dependencies

```
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Set up environment variables in backend/.env:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the development servers:

```
# Backend
cd backend
npm run dev

# Frontend (in another terminal)
cd frontend
npm start
```

## 🔐 Authentication – Getting a JWT Token

To authenticate and get a JWT token, follow these steps:

1. Register a new user:

```
POST /api/auth/register
Content-Type: application/json

{
  "username": "exampleUser",
  "email": "example@email.com",
  "password": "yourpassword"
}
```

2. Login to receive your token:

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "example@email.com",
  "password": "yourpassword"
}
```

3. Response:

You will receive a JSON object like:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

4. Use this token in the Authorization header for any protected routes:

```
Authorization: Bearer <your_token_here>
```

## 🛠️ Getting MongoDB Connection (Atlas)

Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).

Create a free-tier cluster.

Add a database user and password.

Whitelist your IP address (or allow all: 0.0.0.0/0).

Copy the connection string from the Connect > Drivers > Node.js section.

Replace <username> and <password> with your credentials.

Paste it into your .env file as MONGO_URI.

## 🔐 Authentication – JWT via Postman

Use Postman to test the backend authentication API.

1. Register a User
   Method: POST

URL: http://localhost:5000/api/auth/register

Headers:

Content-Type: application/json

Body (raw JSON):

```
{
  "username": "exampleUser",
  "email": "example@email.com",
  "password": "yourpassword"
}
```

Response:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

2. Login a User
   Method: POST

URL: http://localhost:5000/api/auth/login

Headers:

Content-Type: application/json

Body (raw JSON):

```
{
  "email": "example@email.com",
  "password": "yourpassword"
}
```

3. Use JWT for Protected Routes
   In Postman, click the Authorization tab.

Choose Bearer Token.

Paste the JWT token from the login response.

Now you can access any protected API route.

Example with header:

```
Authorization: Bearer <your_token_here>
```

## ✨ Features

JWT-based user authentication

Responsive UI with Tailwind CSS

Real-time toast notifications

Modular, scalable architecture

GitHub Pages deployment

## 🛣️ Roadmap

Movie browsing & search

User profiles & watchlists

Video playback integration

Enhanced form validation

Production-ready deployment

## 🤝 Contributing

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

📄 License

This project is licensed under the [MIT License](https://github.com/YusufBolden/flixify/blob/main/LICENSE)
