import fastify from 'fastify'
import transacao from './routes/transacaoRouter'
export const app = fastify()

app.register(transacao)