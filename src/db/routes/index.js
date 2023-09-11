import express from "express";
const router = express.Router();
import {getAllStudents} from "../controllers/alumnos.js";

router.get("/", getAllStudents);
