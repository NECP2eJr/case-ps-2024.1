# CpMoney

Projeto feito pelos participantes do Processo Seletivo - 2024.1

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/NECP2eJr/case-ps-2024.1.git
   ```

2. Navegue até o diretório do projeto:

   ```cd backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. Copie o arquivo de exemplo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário.

   ```bash
   cp .env.example .env
   ```

   Lembre-se de nunca incluir o arquivo `.env` no controle de versão.

##
use o comando 'npm run db:generate' para gerar script do banco de dados no NeonDb, não esqueça de criar as variaveis de ambiente.

posteriormente utilize npm "db:migrate" para inserir o script gerado no banco de dados Neon.

## Uso

Inicie o servidor localmente:

```bash
npm start:dev
```

O servidor estará disponível em [http://localhost:3333](http://localhost:3333).
