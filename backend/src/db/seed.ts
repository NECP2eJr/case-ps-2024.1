import { transacoes } from './schema';
import postgres from 'postgres';
import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';

const url = `${env.DATABASE_URL}?options=project%3D${env.DB_NAME}`;
const db = drizzle(postgres(url, { ssl: 'require', max: 1 }));

const main = async () => {
    try {
      await db.insert(transacoes).values([
        {
          precoTransacao: 145.60,  
          descricao: '1',
          categoria: '2',
          dataTransacao: '11-03-2024',  
          lucro: false,
          idTransacao: 1,  
          
        }
      ]);
      console.log('Inserção bem-sucedida');
    } catch (error) {
      console.error('Erro na inserção:', error);
    }
  };
  
  main();
  