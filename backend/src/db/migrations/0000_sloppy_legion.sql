CREATE TABLE IF NOT EXISTS "transacoes" (
	"idTransacao" bigserial PRIMARY KEY NOT NULL,
	"preco_transacao" real NOT NULL,
	"descricao" text NOT NULL,
	"categoria" varchar(255) NOT NULL,
	"data_transacao" varchar(25) NOT NULL,
	"lucro" boolean NOT NULL
);
