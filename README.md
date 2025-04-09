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
- npm ou yarnk

## 🔧 Instalação

1. Clone o repositório:

```bash
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

## 📝 Regras de Negócio de Autenticação

### 1. Tipos de Usuários

- **Cliente**: Usuário final que faz pedidos
- **Restaurante**: Estabelecimento que oferece produtos
- **Entregador**: Responsável pela entrega dos pedidos
- **Administrador**: Gerencia o sistema

### 2. Fluxo de Autenticação

- **Registro**:

  - Validação de e-mail único
  - Validação de CPF/CNPJ único
  - Senha com requisitos mínimos (8 caracteres, maiúscula, minúscula, número)
  - Verificação de e-mail obrigatória
  - Validação de dados pessoais (nome, telefone, endereço)

- **Login**:

  - Múltiplos métodos (e-mail/senha, telefone, redes sociais)
  - 2FA (Autenticação de dois fatores) opcional
  - Limite de tentativas de login (5 tentativas em 15 minutos)
  - Bloqueio temporário após exceder tentativas

- **Recuperação de Senha**:
  - Link de recuperação válido por 1 hora
  - Notificação por e-mail e SMS
  - Validação de token único

### 3. Segurança

- Tokens JWT com expiração de 24 horas
- Refresh tokens com expiração de 7 dias
- Rotação automática de tokens
- Logout em todos os dispositivos
- Registro de atividades suspeitas
- Criptografia de dados sensíveis

### 4. Perfis e Permissões

- **Cliente**:

  - Visualizar restaurantes
  - Fazer pedidos
  - Avaliar pedidos
  - Gerenciar endereços

- **Restaurante**:

  - Gerenciar cardápio
  - Visualizar pedidos
  - Atualizar status de pedidos
  - Gerenciar funcionários

- **Entregador**:

  - Visualizar pedidos disponíveis
  - Aceitar/rejeitar entregas
  - Atualizar status de entrega
  - Visualizar histórico

- **Administrador**:
  - Gerenciar todos os usuários
  - Aprovar cadastros
  - Visualizar relatórios
  - Configurar sistema

### 5. Validações e Restrições

- Validação de idade mínima (18 anos)
- Verificação de documentos
- Restrição por localização
- Validação de horário de funcionamento
- Verificação de status da conta

### 6. Notificações

- E-mail de boas-vindas
- Confirmação de cadastro
- Alertas de segurança
- Notificações de atividade
- Lembretes de senha

## 📋 Checklist de Implementação

### 1. Tipos de Usuários

- [ ] Cliente
- [ ] Restaurante
- [ ] Entregador
- [ ] Administrador

### 2. Fluxo de Autenticação

#### Registro

- [ ] Validação de e-mail único
- [ ] Validação de CPF/CNPJ único
- [ ] Senha com requisitos mínimos
- [ ] Verificação de e-mail obrigatória
- [ ] Validação de dados pessoais

#### Login

- [ ] Múltiplos métodos de login
- [ ] 2FA (Autenticação de dois fatores)
- [ ] Limite de tentativas de login
- [ ] Bloqueio temporário

#### Recuperação de Senha

- [ ] Link de recuperação
- [ ] Notificação por e-mail e SMS
- [ ] Validação de token único

### 3. Segurança

- [ ] Tokens JWT
- [ ] Refresh tokens
- [ ] Rotação automática de tokens
- [ ] Logout em todos os dispositivos
- [ ] Registro de atividades suspeitas
- [ ] Criptografia de dados sensíveis

### 4. Perfis e Permissões

#### Cliente

- [ ] Visualizar restaurantes
- [ ] Fazer pedidos
- [ ] Avaliar pedidos
- [ ] Gerenciar endereços

#### Restaurante

- [ ] Gerenciar cardápio
- [ ] Visualizar pedidos
- [ ] Atualizar status de pedidos
- [ ] Gerenciar funcionários

#### Entregador

- [ ] Visualizar pedidos disponíveis
- [ ] Aceitar/rejeitar entregas
- [ ] Atualizar status de entrega
- [ ] Visualizar histórico

#### Administrador

- [ ] Gerenciar todos os usuários
- [ ] Aprovar cadastros
- [ ] Visualizar relatórios
- [ ] Configurar sistema

### 5. Validações e Restrições

- [ ] Validação de idade mínima
- [ ] Verificação de documentos
- [ ] Restrição por localização
- [ ] Validação de horário de funcionamento
- [ ] Verificação de status da conta

### 6. Notificações

- [ ] E-mail de boas-vindas
- [ ] Confirmação de cadastro
- [ ] Alertas de segurança
- [ ] Notificações de atividade
- [ ] Lembretes de senha
