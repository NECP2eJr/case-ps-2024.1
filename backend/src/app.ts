import fastify from 'fastify'

export const app = fastify()

app.get('/Funcionando',(request,ServerResponse)=>{
    ServerResponse.send('deu teste')
    
    
})