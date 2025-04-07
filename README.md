# NestJS Authentication API

Este projeto é uma API de autenticação desenvolvida com NestJS, utilizando JWT (JSON Web Tokens), Prisma ORM e PostgreSQL como banco de dados.

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de aplicações server-side
- [Prisma](https://www.prisma.io/) - ORM moderno para TypeScript e Node.js
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gerenciamento de banco de dados relacional
- [JWT](https://jwt.io/) - JSON Web Tokens para autenticação
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL instalado e rodando
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd nestjs-auth
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nestjs_auth"
JWT_SECRET="seu_secret_jwt"
```

4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

## 🏃‍♂️ Executando o Projeto

Para desenvolvimento:
```bash
npm run start:dev
```

Para produção:
```bash
npm run build
npm run start:prod
```

## 📝 Endpoints da API

### Autenticação
- `POST /auth/register` - Registro de novo usuário
- `POST /auth/login` - Login de usuário existente
- `GET /auth/profile` - Obter perfil do usuário (requer autenticação)

## 🧪 Testes

Para executar os testes:
```bash
npm run test
```

Para executar os testes com cobertura:
```bash
npm run test:cov
```

## 📚 Documentação

A documentação da API está disponível em `/api` quando o servidor estiver rodando.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- NestJS Team
- Prisma Team
- Comunidade Open Source
