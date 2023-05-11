const Venda = require("../model/VendaModel");
const Cliente = require("../model/ClienteModel");

module.exports = {

  async create (req, res) {

    /*{
    "cliente":"",
    "produto":"",
    "data":"1990-12-31T00:00:00.000Z"
      }*/
    try {
      const { cliente, produto ,data } = req.body;
      const clienteEncontrado = await Cliente.findById(cliente);
      const venda = await Venda.create({ 
            
        cliente: clienteEncontrado._id,
        produto,
        data
          
      });
        return res.json(venda);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'ID do cliente não encontrado.' });
        }
  }, 

  async read (req,res){
    try{
      const listarVendas = await Venda.find();
      return res.json(listarVendas);;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Nenhuma venda encontrada.' });
    }

  },

  async delete (req,res){
    try{
    const { id } = req.params;
    const vendaDeletada = await Venda.findOneAndDelete({_id : id});

  if(vendaDeletada){
    return res.json(vendaDeletada);
  }
}catch (error){
  console.error(error);
  res.status(500).json({message:'Venda não deletada. ID não foi encontrado.'})
}

},

  async update (req,res){
    try{
    const { id } = req.params;
    const {cliente, produto,data} = req.body;
    const vendaAlterar = await Venda.findOne({_id:id});

      vendaAlterar.cliente = cliente;
      vendaAlterar.produto = produto;
      vendaAlterar.data = data;

      await vendaAlterar.save();
      return res.json(vendaAlterar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Alteração não sucedida, ID não localizado.' });
    }


}
}