import { text, pgTable, bigserial, varchar, real, boolean } from 'drizzle-orm/pg-core';

// schema.ts
export const transacoes = pgTable('transacoes', {
  idTransacao: bigserial('idTransacao', { mode: 'number' }).primaryKey().notNull(),
  precoTransacao: real('preco_transacao').notNull(),
  descricao: text('descricao').notNull(),
  categoria: varchar('categoria', { length: 255 }).notNull(),
  dataTransacao: varchar('data_transacao', { length: 25 }).notNull(),
  lucro: boolean('lucro').notNull(),
});

