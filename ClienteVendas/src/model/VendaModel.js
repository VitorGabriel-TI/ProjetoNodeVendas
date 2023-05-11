const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({

    cliente: {
        type: mongoose.Schema.Types.String,
        ref: 'Cliente'
            },

    cpfCliente:{ 
    type: mongoose.Schema.Types.String,
    ref: 'Cliente'},

    nomeCliente:{ 
        type: mongoose.Schema.Types.String,
        ref: 'Cliente'},

    produto: String,

    data: Date

});

module.exports = mongoose.model("Venda",VendaModelSchema);