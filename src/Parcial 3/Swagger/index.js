import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import studentRouter from "./students/students.router.js";
import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerTheme } from "swagger-themes";

const app = express();
const port = 8080;
const theme = new SwaggerTheme('v3')

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api de estudiantes",
      version: "1.0.0",
      description: "Descripción de la API Empleados. Consulta el README.md para más detalles:\n\n",
    },
    servers: [{ url: "http://localhost:8080" }],
    tags: [
      { name: "Estudiantes", description: "Operaciones relacionadas con estudiantes" },
    ],
  },
  apis: ["./students/students.router.js"],
};

fetch('./readme.md')
  .then(response => response.text())
  .then(readmeContent => {
    swaggerOptions.definition.info.description += readmeContent;
  })
  .catch(error => console.error('Error al cargar README.md:', error));

const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/api-docs', swaggerUi.serve);
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs,options));
// app.get('/api-docs', swaggerUi.setup(swaggerDocument,options));
app.use(studentRouter);
app.use(cors());

app.listen(port, () => {
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});
