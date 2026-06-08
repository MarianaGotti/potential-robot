<!-- markdownlint-disable MD033 MD041 -->
# 🎨 3D Hub - Plataforma de Compartilhamento de Modelos 3D

Uma aplicação web completa para compartilhar, fazer upload e visualizar modelos 3D em diferentes formatos (GLB, OBJ, STL).

## 🚀 Recursos

- ✅ Autenticação de usuários (Login/Cadastro)
- ✅ Upload de modelos 3D
- ✅ Visualização de modelos
- ✅ Galeria com modelos em destaque
- ✅ Perfil de usuário
- ✅ Armazenamento seguro de arquivos
- ✅ Interface responsiva e moderna

## 📁 Estrutura do Projeto

```
3dhub/
├── frontend/
│   ├── index.html           # Página inicial
│   ├── login.html           # Página de login
│   ├── cadastro.html        # Página de cadastro
│   ├── perfil.html          # Perfil do usuário
│   ├── upload.html          # Upload de modelos
│   │
│   ├── css/
│   │   └── style.css        # Estilos globais
│   │
│   ├── js/
│   │   ├── app.js           # Lógica principal
│   │   ├── login.js         # Autenticação
│   │   └── upload.js        # Upload e perfil
│   │
│   └── assets/              # Imagens e ícones
│
├── backend/
│   ├── server.js            # Servidor Express
│   │
│   └── routes/
│       ├── usuarios.js      # Rotas de usuários
│       ├── modelos.js       # Rotas de modelos
│       └── uploads.js       # Rotas de upload
│
├── uploads/                 # Pasta de uploads
│   ├── glb/
│   ├── obj/
│   └── stl/
│
├── database/
│   └── banco.sql            # Esquema do banco
│
├── package.json             # Dependências Node.js
├── .env.example             # Variáveis de ambiente
└── README.md                # Este arquivo
```

## 🛠️ Instalação

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn
- Um navegador web moderno

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/MarianaGotti/potential-robot.git
   cd potential-robot
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações

4. **Inicie o servidor**
   ```bash
   npm start
   ```
   Ou em modo desenvolvimento:
   ```bash
   npm run dev
   ```

5. **Abra no navegador**
   ```
   http://localhost:3001
   ```

## 📝 Funcionalidades

### 🔐 Autenticação
- Cadastro de novos usuários
- Login seguro com JWT
- Proteção de rotas autenticadas
- Armazenamento de token no localStorage

### 📤 Upload de Modelos
- Suporte para múltiplos formatos (GLB, OBJ, STL)
- Limite de 100MB por arquivo
- Organização automática por tipo de arquivo
- Metadados do modelo (título, descrição)

### 👤 Perfil de Usuário
- Visualização de informações pessoais
- Listagem de modelos enviados
- Gerenciamento de uploads

### 🎨 Interface
- Design responsivo
- Tema moderno e intuitivo
- Animações suaves
- Compatível com dispositivos móveis

## 🔌 API Endpoints

### Usuários
- `POST /api/usuarios` - Registrar novo usuário
- `POST /api/usuarios/login` - Login
- `GET /api/usuarios` - Listar usuários
- `GET /api/usuarios/:id` - Obter usuário por ID

### Modelos
- `GET /api/modelos` - Listar modelos
- `GET /api/modelos?usuario_id=X` - Modelos de um usuário
- `GET /api/modelos/:id` - Obter modelo por ID
- `DELETE /api/modelos/:id` - Deletar modelo (autenticado)

### Upload
- `POST /api/uploads` - Fazer upload de arquivo (autenticado)
- `GET /api/uploads` - Listar uploads

## 🔐 Segurança

- Senhas hasheadas com bcryptjs
- Autenticação com JWT
- CORS configurado
- Validação de arquivo
- Middleware de autenticação

## 🎯 Próximos Passos

- [ ] Integração com banco de dados (PostgreSQL/MongoDB)
- [ ] Visualizador 3D interativo (Three.js)
- [ ] Sistema de comentários e avaliações
- [ ] Compartilhamento de modelos
- [ ] Download de modelos
- [ ] Busca e filtros avançados
- [ ] Notificações em tempo real
- [ ] Dashboard de administrador

## 📚 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Backend**: Node.js, Express.js
- **Autenticação**: JWT (jsonwebtoken)
- **Segurança**: bcryptjs
- **Upload**: Multer
- **CORS**: Para comunicação entre frontend e backend

## 📧 Contato

- **Autora**: MarianaGotti
- **Email**: seu-email@example.com
- **GitHub**: https://github.com/MarianaGotti

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade 3D**
