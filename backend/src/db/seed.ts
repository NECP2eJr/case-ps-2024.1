import { transacoes } from './schema';
import postgres from 'postgres';
import { env } from '../env';
import { drizzle } from 'drizzle-orm/postgres-js';

const main = async () => {
  const url = `${env.DATABASE_URL}?options=project%3D${env.DB_NAME}`;
  const db = drizzle(postgres(url, { ssl: 'require', max: 1 }));
    try {
      await db.insert(transacoes).values([
        {
          precoTransacao: 4800.60,  
          descricao: 'Geladeira',
          categoria: 'Eltrodomestico',
          dataTransacao: '11-03-2024',  
          lucro: true,
          idTransacao: 8,  
          
        }
      ]);
      console.log('Inserção bem-sucedida');
    } catch (error) {
      console.error('Erro na inserção:', error);
    }
  };
  main()