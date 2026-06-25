import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import User from "./models/user.model.js";

await connectDB();

const app = express();
const PORT = process.env.PORT;

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

app.listen(PORT, () => {
  console.log("Server is up and running on PORT:", PORT);

});

