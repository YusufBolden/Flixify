# Flixify
Flixify is a full-stack Netflix-inspired streaming platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a modern UI styled with Tailwind CSS, secure user authentication via JSON Web Tokens (JWT), and clean iconography using Lucide. Toast notifications are handled using React-Hot-Toast.

## 🚧 Work in Progress – This project is actively under development. Contributions and feedback are welcome!

## 🌐 Live Demo
Check out the deployed version on GitHub Pages:
👉 [Flixify Live](https://yusufbolden.github.io/Flixify/)

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
