const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const port = process.env.PORT || 3000
let i = 10

app.set('view engine','ejs')
app.use(bodyParser.urlencoded())

app.get('/',(request, response)=>{
   response.render('index')
})

app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

app.listen(port, (err) => {
    if(err){
        console.log('error')
    }
    else{
        console.log('Como-Fazer server is running on port: ',port)
    }
})