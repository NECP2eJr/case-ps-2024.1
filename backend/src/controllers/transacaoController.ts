import TransacaoService from '../services/transacoes';

class TransacaoController {
  static async cadastrar(req, res) {
    const { precoTransacao, descricao, categoria, dataTransacao, lucro, idTransacao } = req.body;
    try {
      const transacao = await TransacaoService.cadastrarTransacao({
        precoTransacao,
        descricao,
        categoria,
        dataTransacao,
        lucro,
        idTransacao,
      });
      res.status(201).send(transacao);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  static async exibirTransacoes(req,reply){
    try {
      const transacoes = await TransacaoService.exibirTransacoes();
      reply.status(200).send(transacoes);
      
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  }
}
export default TransacaoController;
