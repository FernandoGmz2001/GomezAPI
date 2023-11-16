import { Router } from "express";
import {
  createNewStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "./students.services.js";

const studentRouter = Router();

/**
 * @swagger
 * /alumnos/:
 *    get:
 *      tags:
 *        - Estudiantes
 *      summary: Consultar todos los estudiantes
 *      description: Obtiene todos los estudiantes
 *      responses:
 *        200:
 *          description: Regresa un Json con todos los usuarios
 * 
 */
studentRouter.get("/alumnos", async (_, res) => {
  const result = await getAllStudents();
  res.json(result[0]);
});


/**
 * @swagger
 * /alumnos/{id}:
 *    get:
 *      tags:
 *        - Estudiantes
 *      summary: Obtener un estudiante por su id
 *      description: Obtiene un estudiante mediante su id
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        200:
 *          description: Regresa un usuario en especifico
 * 
 */
studentRouter.get("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getStudentById(id);
  res.json(result[0]);
});

studentRouter.delete("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteStudentById(id);
  res.json(result[0]);
});

studentRouter.post("/alumnos/new", async (req, res) => {
  const result = await createNewStudent(req);
  res.json(result[0]);
});

studentRouter.put("/alumnos/:id", async (req, res) => {
  const result = await updateStudent(req);
  res.json(result[0]);
});

export default studentRouter;
