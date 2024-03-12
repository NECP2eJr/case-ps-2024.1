import { FastifyInstance } from 'fastify';
import TransacaoController from '../controllers/transacaoController.ts';

export default function transacaoRouter(fastify: FastifyInstance, options: any, done: () => void) {
  fastify.post('/transacao', TransacaoController.cadastrar); 
  fastify.get('/transacao',(req,ServerResponse)=>{
    ServerResponse.send(TransacaoController.exibirTransacoes)
  })
  done();
}