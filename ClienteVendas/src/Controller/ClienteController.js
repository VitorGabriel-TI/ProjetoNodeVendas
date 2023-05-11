const Cliente = require("../model/ClienteModel");

module.exports = {

    async create (req ,res){

        /*{
            "nome":"",
            "cpf":"",
        }*/

        try{
            const {nome,cpf} = req.body;
            const clienteCreate = await Cliente.create({
                nome,
                cpf,
            });
            return res.json(clienteCreate);
        }catch (err){
            return res.status(400).send({error: 'Error ao criar cliente.'})
        }
        },

    async read (req ,res){
        try{

        
            const clienteList = await Cliente.find();
            return res.json(clienteList);
        }catch (err){
            return res.status(400).send({error: 'Nenhum cliente encontrado'})
        }

    },

    async delete (req ,res){
        try{
        const { id } = req.params;
        const clienteDelete = await Cliente.findOneAndDelete({ _id:id});

        if(clienteDelete){
            return res.json(clienteDelete);
        }
    }catch (err){
        return res.status(400).send({error: 'Cliente não encontrado!!!'})
    }

    },

    async update (req, res){
        try{
        const { id } = req.params;
        const {nome,cpf} = req.body;
        const clienteUpdate = await Cliente.findOne({ _id:id});

            clienteUpdate.nome = nome;
            clienteUpdate.cpf = cpf;

        await clienteUpdate.save();
    return res.json(clienteUpdate);
}catch (err){
    return res.status(400).send({error: 'Atualização não sucedida, ID não localizado.'})
}
}

};


