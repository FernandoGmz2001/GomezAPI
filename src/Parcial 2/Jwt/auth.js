import { Router } from "express";
import process from 'process'
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const authRouter = Router()
const SECRET_KEY = process.env.SECRET_KEY

authRouter
  .get("/", (_, res) => {
    res.json({ message: "Hola mundo" });
  })
  .post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(SECRET_KEY);
    console.log(`User ${username} is trying to login`); 

    if(username == 'admin' && password == 'admin') {
        return res.status(201).json({
            message: 'Login successful',
            token: jwt.sign({ username }, SECRET_KEY)
        })
    }
  });



  export default authRouter