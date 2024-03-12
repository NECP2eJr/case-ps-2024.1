import { transacoes } from './schema';
import postgres from 'postgres';
import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';

class Transacao {
  private db: any;

  constructor() {
    const url = `${env.DATABASE_URL}?options=project%3D${env.DB_NAME}`;
    this.db = drizzle(postgres(url, { ssl: 'require', max: 1 }));
  }

  async cadastrarTransacao(transacaoData: any) {
    try {
      await this.db.insert(transacoes).values([transacaoData]);
      console.log('Inserção bem-sucedida');
    } catch (error) {
      console.error('Erro na inserção:', error);
    }
  }
}

module.exports = {Transacao};


