const app = require('./app')
 
const port = 3000
app.listen(port, function(){
    console.log(`
        Servidor subiu com sucesso!
        Acesse por meio de http://localhost:${port}
    `)
})