const Sequelize = require("sequelize");

const PostModel = require("../models/Post");

const DBURL = process.env.DB_INFO;

const sequelize = new Sequelize(DBURL)

const Post = PostModel(sequelize, Sequelize)

// Con esta función en el objeto sequelize sincronizamos la base de datos
sequelize.sync()
  .then(() => {
    console.log(`Tablas de DB creadas y sincronizadas`.yellow.bold);
  })

  module.exports = {Post}


// Dependencies:

// npm install --save sequelize
// npm install --save mysql2

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });