const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/clientes";
//const dbConfig = "mongodb+srv://VitorGabriel:756482139@cluster0.a6flhdf.mongodb.net/clientes?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

module.exports = conexao;