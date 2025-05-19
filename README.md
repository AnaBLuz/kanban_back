# 🗂️ Kanban API - NestJS + Prisma + PostgreSQL

API backend para gerenciamento de tarefas de um quadro Kanban, desenvolvida com **NestJS**, **Prisma ORM** e **PostgreSQL**.

## 🚀 Funcionalidades

- 📋 Listar todas as tarefas
- ➕ Criar uma nova tarefa
- ✏️ Editar uma tarefa existente
- 🔁 Atualizar o status de uma tarefa (`PENDING`, `IN_PROGRESS`, `TESTING`, `DONE`)
- ❌ Deletar uma tarefa
- 🔎 Filtrar tarefas por status

---

## 🧱 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Requisitos

- Node.js (v18+ recomendado)
- PostgreSQL 
- npm
- Variável de ambiente `DATABASE_URL` com a string de conexão ao banco

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/kanban-backend.git
cd kanban-backend

# Instale as dependências
npm install
# ou
yarn install