const express = require('express')
const app = express()

require("./model/index")

app.set('viwe engine', 'ejs')
app.get('/', (req, res)=>{
    res.render("home.ejs")
})
app.get('/register', (req, res)=>{
    res.render("auth/Register.ejs")
})
app.get('/login', (req, res)=>{
    res.render("auth/Login.ejs")
})
app.use(express.static('public/css/'))
const PORT = 3000
app.listen(PORT, ()=>{
    console.log('Projest has been started at port no' + PORT)
})