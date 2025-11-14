const express = require('express')
const app = express()


app.set('viwe engine', 'ejs')
app.get('/', (req, res)=>{
    const name = "Susan Karki"
    res.render("home.ejs", {data:name})
})
app.get('/about', (req, res)=>{
    res.render("about.ejs")
})

app.listen(3000, ()=>{
    console.log('Projest has been started at port no 3000')
})