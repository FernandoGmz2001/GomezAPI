import express  from 'express'
// import cors from 'cors'

const app = express()
const port = 8080

// app.use(cors())
app.use(express.json())

app.get('/', (_,res)=>{
    res.send('Hola mundo')
})

app.get('/alumnos', (_,res)=>{
    res.send('Esta es la ruta de los alumnos')
})

app.get('/alumnos/:id', (req,res)=>{
    const {id} = req.params
    if(id == 1 ) res.send ('Es el alumno Fernando!!!')
    else res.send('Es otro alumno')
})

app.use((req,res)=>{
    res.status(404).send('Error 404')
})

app.listen(port,(req,res)=>{
    console.log(`Servidor express escuchando en el puerto: http://localhost:${port}` );
})

