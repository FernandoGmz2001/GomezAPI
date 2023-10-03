import { Router } from "express";

const studentRouter = Router();

studentRouter.get("/",(_, res) => {
    res.send("Hola mundo");
});

export default studentRouter;