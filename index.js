const express = require('express')
const mongoose = require('mongoose');
const app = express()

const data= [
    {
    fullName : "Farheen",
    pwd : "123"
},
{
    fullName : "Aliza",
    pwd : "123"
},
{
    fullName : "Aisha",
    pwd : "123"
}
]
app.get('/', (req, res)=> res.send(data))
app.listen(5000 , ()=> console.log('Server started'))



