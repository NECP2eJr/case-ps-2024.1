import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import{env} from '../env'
import { drizzle } from 'drizzle-orm/postgres-js';

const url = `${env.DATABASE_URL}?options=project%3D${env.DB_NAME}`;
const db = drizzle(postgres(url, { ssl: 'require', max: 1 }));
const main = async () => {
	await migrate(db, { migrationsFolder: './src/db/migrations' });
	process.exit(0);
};
main();