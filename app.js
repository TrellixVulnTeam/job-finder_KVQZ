const express = require('express');
const app = express();
const database = require('./database/connection');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Rodando na porta ${PORT}`);
});

//DB conction
database.authenticate()
        .then(() => {
            console.log(`Database conectada!`);
        })
        .catch(err => {
            console.log(`Ocorreu um erro com a conexão`);
        });

//routes
app.get('/', (req, res) => {
    res.send("Está funcionando!");
});