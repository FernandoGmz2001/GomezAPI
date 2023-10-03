import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import studentRouter from './students/student.routes'

const app = express()
const port = 3000

app
.use(cors())
.use(express.json())
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.use('/api/',studentRouter)


app.listen(port, () => {
    console.log(
      `Servidor express escuchando en el puerto: http://localhost:${port}`
    );
  });

export default app