const express = require("express");
const app = express();
const rotas = require("./rotas");
const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(express.json());
app.use(rotas);
require = require("./Config/dbConfig");

app.listen(8082);


