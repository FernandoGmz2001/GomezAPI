import { Router } from "express";
import { getAllStudents } from "./students.services.js";

const studentRouter = Router();

studentRouter.get("/", async (_, res) => {
    const result = await getAllStudents()
    res.json(result[0])
});

export default studentRouter