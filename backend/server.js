import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ROUTES

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running http://localhost:${PORT}`.yellow.bold));
