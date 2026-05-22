# Cadastro de Jogos da Mega-Sena

Aplicação web para cadastrar e listar jogos da Mega-Sena, desenvolvida como atividade prática da disciplina Desenvolvimento Web I na FATEC Jacareí.

## Tecnologias

- HTML, CSS e JavaScript
- Node.js + Express
- PostgreSQL
- Deploy no Render

## Como rodar

1. Instale as dependências
```bash
npm install
```

2. Configure o `.env`
```env
PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/megasena
```

3. Crie a tabela no banco
```sql
CREATE TABLE senas (
    id_sena SERIAL PRIMARY KEY,
    nros VARCHAR(100) NOT NULL
);
```

4. Inicie o servidor
```bash
node src/server.js
```

Acesse em `http://localhost:3000`
