import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import studentRouter from "./students/students.router.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 8080;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Empleados",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:8080" }],
  },
  apis: ["./students/students.router.js"],
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/api-docs', swaggerUi.serve);
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// app.get('/api-docs', swaggerUi.setup(swaggerDocument,options));
app.use(studentRouter);
app.use(cors());

app.listen(port, () => {
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});
