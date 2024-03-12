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
      await this.db.insert(transacoes).values([transacaoData]);
      console.log('Inserção bem-sucedida');
    } catch (error) {
      console.error('Erro na inserção:', error);
    }
  }
  static async exibirTransacoes() {
    try {
      const result = await this.db.select().from(transacoes)
      console.log('resultados ok');
    } catch (error) {
      console.error('Eroo na busca:', error);
    }
  }  
}
TransacaoService.initialize();
