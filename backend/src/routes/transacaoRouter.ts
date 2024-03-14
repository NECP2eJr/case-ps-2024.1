import { FastifyInstance } from 'fastify';
import TransacaoController from '../controllers/transacaoController.ts';

export default function transacaoRouter(fastify: FastifyInstance, options: any, done: () => void) {
  fastify.post('/transacao', TransacaoController.cadastrar); 
  fastify.get('/transacao',TransacaoController.exibirTransacoes);
  fastify.put('/transacao',TransacaoController.editarTransacao);
  done();
}
