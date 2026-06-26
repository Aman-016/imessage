import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import User from "./models/user.model.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";


await connectDB();

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware()); 


app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

app.listen(PORT, () => {
  console.log("Server is up and running on PORT:", PORT);

});

