import express  from 'express'
import { createWriteStream} from 'fs'
import morgan from 'morgan'
import {connectDb} from './connection.js'
import sql from 'mssql'
// import { routes } from './routes/index.js'
// import cors from 'cors'

const app = express()
const port = 8080




const accessLogStream = createWriteStream((import.meta.url, 'access.log'), { flags: 'a' })
// app.use(cors())
app.use(express.json())
// app.use('/',routes)
app.listen(port,(req,res)=>{
    console.log(req,res);
    console.log(`Servidor express escuchando en el puerto: http://localhost:${port}` );
})

app.use(morgan('combined', { stream: accessLogStream }))

morgan('tiny')

app.get('/', (_,res)=>{
    res.send('Hola mundo')
})

app.get('/alumnos', async (_,res)=>{
    await connectDb()
    const result = await sql.query('SELECT * FROM Alumnos')
    // res.send('Esta es la ruta de los alumnos')
    res.json(result.recordset)
})

app.get('/alumnos/:id', (req,res)=>{
    const {id} = req.params
    if(id == 1 ) res.send ('Es el alumno Fernando!!!')
    else res.send('Es otro alumno')
})

app.use((req,res)=>{
    res.status(404).send('Error 404')
})
