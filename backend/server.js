import express from "express";

const app = express();

app.get("/signup", (req, res) => {
  res.send("Signup route");
});

app.get("/login", (req, res) => {
  res.send("Login route");
});

app.get("/logout", (req, res) => {
  res.send("Logout route");
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
