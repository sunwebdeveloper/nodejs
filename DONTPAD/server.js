const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.render('home.ejs')
})

port = 3000
app.listen(port, () => {
    console.log(`subindo na porta ${port}`)
})