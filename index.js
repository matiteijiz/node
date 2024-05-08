const express = require('express')
const app = express()

const PORT = 1234

app.get('/', (req, res) => {
    res.status(200).send('Hola mundo express')
})

app.listen(PORT, () =>{
    console.log('El puerto esta escuchando')
})