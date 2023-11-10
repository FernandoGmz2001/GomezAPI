import express from "express";
import dotenv from 'dotenv'
import authRouter from "./auth.js";

dotenv.config()

const app = express();
const port = 3000

app
  .use(express.json())
  .use(authRouter)
  .listen(port, () => {
  console.log(`Servidor express escuchando en el puerto ${port}`);
})

app.get("/", (_, res) => {
  res.send("Hola mundo este es el parcial 2");
})