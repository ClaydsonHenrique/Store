## Requisitos e instruções para o projeto

- vamos criar teste para auxiliar no desenvolvimento do projeto

## Criar teste para o endpoint /login

o teste deve verifiar se é possivel fazer o login
se retorna erro ao inserir email ou senha errada,
também deve retornar erro ao não inserir nada

deve retornar um token de login caso a senha e email estajam certos

1. **Post /login**

```
  {
    "email": "user@email.com",
    "password":"admin_1234"
  }
```

**A resposta deve retornar um token valido com status 200**
{
"status":200,
"token":"tokenlogin",
}

## Criar teste para cobrir o endpoint /products

2. **get /produtc e /product/:id**

deve retornar um array com varios produtos, com status 200

```
{
  "productName":"nome do produto",
  "marca":"adidas",
  "categoria": "lifestyle",
  "quantidade": 45,
  "cor":"Azul",
  "images": "[Array de imagens]",
  ...
}
```

3. **post /products**

deve retornar status 201, e adicionar um novo produto ao banco de dados,

**body**

```
{
  "productName":"nome do produto",
  "marca":"adidas",
  "categoria": "lifestyle",
  "quantidade": 45,
  "cor":"Azul",
  "images": "[Array de imagens]",
  ...
}
```

caso algum desse intens não seja preenchidos retorne o erro 400,

```
{
  "message": "Todos os campos são obrigatórios. Por favor, preencha todas as informações necessárias",
}
```

caso o produto exista restorne o status 409,

```
{
  "message": "Este produto já está cadastrado. Por favor, verifique as informações e tente novamente."
}
```

4. **put /product**

pode editar o produto,

```
body
  {
  "productName"?:"nome do produto",
  "marca"?:"adidas",
  "categoria"?: "lifestyle",
  "quantidade"?: 45,
  "cor"?:"Azul",
  "images"?: "[Array de imagens]",
  ...
}
```

    deve retornar status 201 e retornar o produto atualizado.

    5. **delete /product**

    pode remover produto da loja

    erro caso produto nao encontrado

````
{
   "status":404,
   "message":"Produto não encontrado"
 }
 ```

 caso de sucesso retornar

```
{
   "status":200,
   "message":"produto deletado com sucesso"
 }
````

