import express from "express";
// import { promisePool } from "./connection.js";
import bodyParser from "body-parser";
import cors from "cors";
import https from "https";
import fs from "fs";

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const app = express();
const port = 8080;
app
.use(express.json())
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))
.use(cors());

https.createServer(options, app).listen(port, () => {
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});

app.get("/", (_, res) => {
  res.send("Hola mundo");
});
