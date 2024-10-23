# Boas-vindas ao repositório do projeto Store 

## 🚀 Projeto Store

Este é um projeto Full Stack desenvolvido com React (funcional), Node.js e TypeScript, utilizando Docker para facilitar a configuração e execução.

### 📦 Funcionalidades

- Interface de usuário dinâmica com React.
- API robusta construída em Node.js com TypeScript.
- Containerização do ambiente com Docker.

## 🌐 Backend

O backend do projeto é construído com Node.js e TypeScript. Ele fornece uma API RESTful que permite a comunicação entre o frontend e o servidor.

### 📡 Endpoints

Aqui estão os principais endpoints disponíveis na API:

1. **POST /api/login**
   - **Descrição**: 
   - **Corpo da Requisição**:
     ```json
     {
       "email": "user@email.com",
       "password": "senha"
     }
     ```
   - **Resposta**:
     ```json
     {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     }
     ```

2. **POST /api/register**
   - **Descrição**: Registra um novo usuário no sistema.
   - **Corpo da Requisição**:
     ```json
     {
       "name": "string",
       "lastname": "string",
       "email": "user@email.com",
       "password": "senha",
       "tumrbl": "string",  // opcional
       "endereco": "string",
       "cep": "string",
       "telefone": "string"
     }
     ```
   - **Parâmetros**:
     - `name`: Nome do usuário.
     - `lastname`: Sobrenome do usuário.
     - `email`: Endereço de e-mail do usuário.
     - `password`: Senha do usuário.
     - `tumrbl`: Nome de usuário na plataforma Tumblr (opcional).
     - `endereco`: Endereço do usuário.
     - `cep`: Código postal do usuário.
     - `telefone`: Número de telefone do usuário.
   - **Resposta**:
     ```json
     {
       "id": 1,
       "username": "string",
       "email": "user@email.com",
       "tumrbl": "string",
       "role": "USER",
       "endereco": "string",
       "cep": "string",
       "telefone": "string"
     }
     ```
   - **Descrição da Resposta**: Retorna um objeto que representa o novo usuário registrado, com as seguintes propriedades:
     - `id`: Identificador único do usuário.
     - `username`: Nome completo do usuário.
     - `email`: Endereço de e-mail do usuário.
     - `tumrbl`: Nome de usuário na plataforma Tumblr (se fornecido).
     - `role`: Papel do usuário (neste caso, sempre "USER").
     - `endereco`: Endereço do usuário.
     - `cep`: Código postal do usuário.
     - `telefone`: Número de telefone do usuário.

3. **GET /api/produtos**
   - **Descrição**: Retorna uma lista de todos os produtos.
   - **Resposta**:
     ```json
     [
       {
         "id": 1,
         "productName": "string",
         "description": "string",
         "price": 0.0,
         "promo": 0.0,
         "gender": "string",
         "colorsId": 0,
         "categoriesId": 0,
         "brandsId": 0,
         "thumbnail": "string",
         "quantity": 0,
         "images": [
           "string"
         ]
       },
       ...
     ]
     ```
   - **Descrição da Resposta**: A resposta contém um array de objetos, onde cada objeto representa um produto com as seguintes propriedades:
     - `id`: Identificador único do produto.
     - `productName`: Nome do produto.
     - `description`: Descrição detalhada do produto.
     - `price`: Preço normal do produto.
     - `promo`: Preço promocional do produto (se aplicável).
     - `gender`: Gênero ao qual o produto se destina (ex: Unissex).
     - `colorsId`: Identificador da cor.
     - `categoriesId`: Identificador da categoria.
     - `brandsId`: Identificador da marca.
     - `thumbnail`: URL da imagem em miniatura do produto.
     - `quantity`: Quantidade disponível em estoque.
     - `images`: Array de URLs para imagens do produto.

4. **GET /api/produtos/:id**
   - **Descrição**: Retorna os detalhes de um produto específico pelo ID.
   - **Parâmetros da URL**:
     - `id`: O ID do produto que você deseja buscar.
   - **Resposta**:
     ```json
     {
       "id": 1,
       "productName": "string",
       "description": "string",
       "price": 0.0,
       "promo": 0.0,
       "gender": "string",
       "colorsId": 0,
       "categoriesId": 0,
       "brandsId": 0,
       "thumbnail": "string",
       "quantity": 0,
       "images": [
         "string"
       ]
     }
     ```
   - **Descrição da Resposta**: O objeto retornado contém as seguintes propriedades:
     - `id`: Identificador único do produto.
     - `productName`: Nome do produto.
     - `description`: Descrição detalhada do produto.
     - `price`: Preço normal do produto.
     - `promo`: Preço promocional do produto (se aplicável).
     - `gender`: Gênero ao qual o produto se destina (ex: Unissex).
     - `colorsId`: Identificador da cor.
     - `categoriesId`: Identificador da categoria.
     - `brandsId`: Identificador da marca.
     - `thumbnail`: URL da imagem em miniatura do produto.
     - `quantity`: Quantidade disponível em estoque.
     - `images`: Array de URLs para imagens do produto.

5. **GET /api/carrinho**
   - **Descrição**: Retorna todos os itens no carrinho do usuário, incluindo detalhes dos produtos associados.
   - **Resposta**:
     ```json
     [
       {
         "id": 1,
         "quantidade": 2,
         "product": {
           "id": 101,
           "productName": "string",
           "description": "string",
           "price": 0.0,
           "promo": 0.0,
           "gender": "string",
           "colorsId": 0,
           "categoriesId": 0,
           "brandsId": 0,
           "thumbnail": "string",
           "quantity": 0,
           "images": [
             "string"
           ]
         }
       },
       ...
     ]
     ```
   - **Descrição da Resposta**: A resposta contém um array de objetos, onde cada objeto representa um item no carrinho, com as seguintes propriedades:
     - `id`: Identificador único do item no carrinho.
     - `quantidade`: Quantidade do produto no carrinho.
     - `product`: Objeto contendo detalhes do produto associado, incluindo:
       - `id`: Identificador único do produto.
       - `productName`: Nome do produto.
       - `description`: Descrição detalhada do produto.
       - `price`: Preço normal do produto.
       - `promo`: Preço promocional do produto (se aplicável).
       - `gender`: Gênero ao qual o produto se destina.
       - `colorsId`: Identificador da cor.
       - `categoriesId`: Identificador da categoria.
       - `brandsId`: Identificador da marca.
       - `thumbnail`: URL da imagem em miniatura do produto.
       - `quantity`: Quantidade disponível em estoque.
       - `images`: Array de URLs para imagens do produto.

6. **POST /api/carrinho**
   - **Descrição**: Adiciona um produto ao carrinho do usuário.
   - **Autenticação**: Requer um token de autenticação no cabeçalho da requisição.
   - **Cabeçalhos**:
     - `Authorization`: `Bearer <token>`
   - **Corpo da Requisição**:
     ```json
     {
       "product": 1,
       "quantidade": 2
     }
     ```
   - **Parâmetros**:
     - `product`: ID do produto a ser adicionado ao carrinho.
     - `quantidade`: Quantidade do produto a ser adicionada.
   - **Resposta**:
     ```json
     {
       "id": 1,
       "userId": 123,
       "idProduct": 1,
       "quantidade": 2
     }
     ```
   - **Descrição da Resposta**: Retorna um objeto que representa o item adicionado ao carrinho, com as seguintes propriedades:
     - `id`: Identificador único do item no carrinho.
     - `userId`: ID do usuário que possui o carrinho.
     - `idProduct`: ID do produto adicionado.
     - `quantidade`: Quantidade do produto no carrinho.

### 📖 Como Iniciar o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/store.git
   cd store
   
 Execute:
   
`npm run compose:up`

 Tecnologias Utilizadas

    Frontend: React
    Backend: Node.js, TypeScript
    Containerização: Docker

