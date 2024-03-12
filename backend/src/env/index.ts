import 'dotenv/config'
import { z } from 'zod'


const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333),
  DB_PORT: z.coerce.number().default(5432),
  DB_HOST : z.coerce.string().default("127.0.0.1"),
  DB_USER:z.coerce.string().default('postgres'),
  DB_PASSWORD : z.coerce.string().default('1234'),
  DB_NAME: z.coerce.string().default('cp_money'),
  DATABASE_URL: z.coerce.string().default('postgresql://Matheus-Bernardo:QCZJ3xaObT5D@ep-lucky-rain-a5epegwc.us-east-2.aws.neon.tech/cpMoney?sslmode=require')
})
const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

export const env = _env.data!
