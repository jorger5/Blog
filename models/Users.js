module.exports = (sequelize, type) => {
  const User = sequelize.define("user",{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: type.STRING,
      allowNull: false,
      isAlpha: true
    },
    apellido: {
      type: type.STRING,
      allowNull: false,
      isAlpha: true
    },
    mail: {
      type: type.STRING,
      allowNull: false,
      isEmail: true
    },
    fecha:{
      type:type.STRING,
      isDate:true
    }
  })
  return User; //aqui regresamos el objeto creado con el modelo y para exportarlo al servidor
}
