const express = require('express')
const app = express()
const port = 3000
const publicadora = require('./routes/publicadora.js')

app.use(express.json())
app.use('/publicadora', publicadora)





app.listen(port, ()=>{
    console.log(`Porta ${port} ativa`);
})