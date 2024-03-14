import { transacoes } from '../db/schema';
import postgres from 'postgres';
import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';

export default class TransacaoService {
  private static db: any;

  static initialize() {
    const url = `${env.DATABASE_URL}?options=project%3D${env.DB_NAME}`;
    this.db = drizzle(postgres(url, { ssl: 'require', max: 1 }));
  }

  static async cadastrarTransacao(transacaoData: any) {
    try {
      const result = await this.db.insert(transacoes).values([transacaoData]);
      console.log('Inserção bem-sucedida');
      return transacaoData
      
    } catch (error) {
      return error('Erro na inserção:', error);
    }
  }
  static async exibirTransacoes() {
    try {
      const result = await this.db.select().from(transacoes)
      return result
    } catch (error) {
      console.error('Eroo na busca:', error);
    }
  }
  static async editarTransacoes(transacaoData){
    try {
      const { idTransacao, ...atualizacao } = transacaoData;
      if (!idTransacao) {
        console.error('ID não especificado para a atualização.');
        return;
      }
      await this.db.update(transacoes).set(atualizacao).where({ idTransacao });
      console.log('update bem-sucedido');
    } catch (error) {
      console.error('Erro no update:', error);
    }
  }  
}
TransacaoService.initialize();
