const express = require('express'); //chamando o express
const cors = require('cors');
const routes = require('./routes');
 
const app = express(); //criando aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(2405); //mandando ir pra porta 2405 = localhost:2405


