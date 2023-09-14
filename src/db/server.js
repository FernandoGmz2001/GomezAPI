import express from "express";
import { createWriteStream } from "fs";
import morgan from "morgan";
import { promisePool } from "./connection.js";
import bodyParser from "body-parser";
// import { routes } from './routes/index.js'
import cors from "cors";

const app = express();
const port = 8080;

const accessLogStream = createWriteStream((import.meta.url, "access.log"), {
  flags: "a",
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, (req, res) => {
  console.log(req, res);
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});
app.use(cors());

app.use(morgan("combined", { stream: accessLogStream }));

morgan("tiny");

app.get("/", (_, res) => {
  res.send("Hola mundo");
});

app.get("/alumnos", async (_, res) => {
  const result = await promisePool.query("SELECT * FROM Alumno");
  res.json(result[0]);
});

app.get("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  if (id == 1) res.send("Es el alumno Fernando!!!");
  else res.send("Es otro alumno");
});

app.delete("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await promisePool.query(
      "DELETE FROM Alumno WHERE id_alumno = ?",
      [id]
    );
    res.json(result[0]);
    res.status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/alumnos/new", async (req, res) => {
    const { nombre, apellido_materno, apellido_paterno } = req.body;
  try {
    const result = await promisePool.query(`INSERT INTO Alumno VALUES (null,'${nombre}', '${apellido_materno}', '${apellido_paterno}')`)
    res.json(result[0]).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/alumnos/:id", async (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;
  try {
    const sql = "UPDATE Alumno SET ? WHERE id_alumno = ?";
    const result = await promisePool.query(sql, [updateFields, id])
    res.json(result[0]).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((req, res) => {
  res.status(404).send("Error 404");
});
