import TransacaoService from '../services/transacoes';

class TransacaoController {
  static async cadastrar(req, reply) {
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
      reply.status(201).send(transacao);
    } catch (error) {
      reply.status(400).send({ message: error.message });
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
  static async editarTransacao(req,reply){
    const { precoTransacao, descricao, categoria, dataTransacao, lucro, idTransacao } = req.body;
    try {
      const transacao = await TransacaoService.editarTransacoes({
        precoTransacao,
        descricao,
        categoria,
        dataTransacao,
        lucro,
        idTransacao,
      });
      reply.status(200).send(transacao);
    } catch (error) {
      reply.status(400).send({ message: error.message });
    }
    
  }
}
export default TransacaoController;
