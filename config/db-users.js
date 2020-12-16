const Sequelize = require("sequelize");

const UserModel = require("../models/Users");

const DBURL = process.env.DB_INFO;

const sequelize = new Sequelize(DBURL)

const User = UserModel(sequelize, Sequelize)

// Con esta función en el objeto sequelize sincronizamos la base de datos
sequelize.sync()
  .then(() => {
    console.log(`Tablas de DB de Usuario creadas y sincronizadas`.yellow.bold);
  })

  module.exports = {User}