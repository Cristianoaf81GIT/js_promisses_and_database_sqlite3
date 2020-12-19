# Promise e banco de dados
### usando números aleatórios sem repetição

Exemplo de código

## Instalação

Use no npm ou yarn, na raiz do projeto, para instalar as depêndencias do projeto.

```bash
npm install -s
ou
yarn install
```

## Uso

```javascript
no arquivo index.js, apenas na primeira execução descomente 
essa linha:
await connection.sync({force:true});
// essa linha força, na primeira execução, a sincronização 
// entre o orm sequelize e o banco de dados em si, criando
// as tabelas
```

## Contribuições
Fique a vontade para alterar o projeto conforme necessidades, sem
garantias. 


## Licença
[MIT](https://choosealicense.com/licenses/mit/)