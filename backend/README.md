# Nome do Projeto

Projeto feito pelos participantes do Processo Seletivo - 2024.1

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão X.X.X ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/projeto.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd projeto
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

## Uso

Inicie o servidor localmente:

```bash
npm start:dev
```

O servidor estará disponível em [http://localhost:3333](http://localhost:3333).

## Contribuindo

1. Crie uma branch com a sua feature (`git checkout -b feature/MinhaFeature`)
2. Faça commit das suas alterações (`git commit -am 'Adiciona MinhaFeature'`)
3. Faça push para a branch (`git push origin feature/MinhaFeature`)
4. Crie um novo Pull Request

**Notas Adicionais:**

Para esse projeto, será necessário o uso de um ORM para facilitar a comunicação do back end com o banco de dados escolhido, é recomendado usar o Prisma ou Drizzle.