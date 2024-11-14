const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css', (req , res) => {
    res.sendFile(__dirname + '/public/style.css')
})

app.get('/app.js', (req, res)=>{
    res.sendFile(__dirname + '/public/app.js')
})

app.listen(port, () => {
    console.log('Servidor rodando...');
});

