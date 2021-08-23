//CONEXÃO COM BANCO DE DADOS MYSQL//

const Sequelize = require('sequelize')
const sequelize = new Sequelize('login', 'root', 'senha', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conectado com Sucesso')
}).catch((erro) => {
    console.log("falha ao se conectar: " + erro);
});

//Criando Tabela postagem //

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "teste",
    conteudo: "huasuhsahusuhsausaush"
})

//TABELA USUARIO//
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

Usuario.sync({force: true}) //Criando dentro do banco de dados//
Postagem.sync({force: true}) //Criando dentro do banco de dados//
