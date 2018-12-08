const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', socket =>{
    console.log('Conectado')
    socket.on('CLIENT_NOVAMENSAGEM',(dadoQueVeioDoClient)=>{
        console.log('Houve uma mensagem vinda do client')
        io.emit('SERVER_NOVAMENSAGEM',dadoQueVeioDoClient)
    })
})

app.get('/', (req,res)=>{
    res.render('home.ejs')
})

port = 3000
http.listen(port, () => {
    console.log(`subindo na porta ${port}`)
})