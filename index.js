const express = require('express')
const app = express()

const data= {
    fullName : "Farheen",
    pwd : "123"
}
app.get('/', (req, res)=> res.send(data))
app.listen(4000 , ()=> console.log('Server started'))


