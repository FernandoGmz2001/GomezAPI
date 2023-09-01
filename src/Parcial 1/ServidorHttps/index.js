import http from 'http'

let server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.write('Hola como estas')
    // res.setHeader('Acces-Control-Allow-Origin','*')
    res.end()
    console.log('Servidor iniciado correctamente');
    if(req.url == '/fer'){
        res.write('hola!')
    }
})

server.listen(8080,()=>{
    console.log('Servidor node escuchando en puerto 8080');
})

