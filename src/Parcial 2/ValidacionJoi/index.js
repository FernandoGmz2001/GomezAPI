import express from "express";
import joi from "joi";
import { promisePool } from "./connection.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8080;


const schema = joi.object({
    nombre: joi.string().min(3).max(30).required(),
})

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hola mundo");
});

app.get("/alumnos", async (_, res) => {
  const result = await promisePool.query("SELECT * FROM Alumno");
  res.json(result[0]);
});

app.get("/alumnos/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await promisePool.query(
      "SELECT * FROM Alumnos WHERE id_alumno = ?",
      [id]
    );
    // if (result[0].length == 0) throw new Error('No se encontro el alumno');
    res.json(result[0]);
  } catch (error) {
    next(error);
  }
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
  schema.validate({ nombre: 'F'});
  try {
    const result = await promisePool.query(
      `INSERT INTO Alumno VALUES (null,'${nombre}', '${apellido_materno}', '${apellido_paterno}')`
    );
    res.json(result[0]).status(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;
  try {
    const sql = "UPDATE Alumno SET ? WHERE id_alumno = ?";
    const result = await promisePool.query(sql, [updateFields, id]);
    res.json(result[0]).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
