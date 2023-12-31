import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import studentRouter from "./students/students.router.js";
import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerTheme } from "swagger-themes";
import chaiHttp from "chai-http";

export const app = express();
const port = 8080;
const theme = new SwaggerTheme('v3')

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api de estudiantes",
      version: "1.0.0",
      description: "Esta es la descripcion de la api de estudiantes",
    },
    servers: [{ url: "http://localhost:8080" }],
    tags: [
      { name: "Estudiantes", description: "Operaciones relacionadas con estudiantes" },
    ],
  },
  apis: ["./students/students.router.js"],
};


const options = {
  explorer: true,
  customCss: theme.getBuffer('dark')
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs,options));
app.use(studentRouter);
app.use(chaiHttp)
app.use(cors());

app.use('/api-docs-json', (req,res) => {
  res.json(swaggerDocs);
})

app.listen(port, () => {
  console.log(
    `Servidor express escuchando en el puerto: http://localhost:${port}`
  );
});
