module.exports = (sequelize, type) => {
  const Post = sequelize.define("post",{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: type.STRING,
      allowNull: false
    },
    contenido: {
      type: type.STRING,
      allowNull: false
    },
    imagen: {
      type: type.STRING,
      contains: ".png"
    },
    categoria:{
      type:type.STRING
    },
    autor:{
      type:type.STRING,
      allowNull:false
    },
    fecha: {
      type: type.DATEONLY,
      allowNull:false,
      isDate:true
    }
  })
  return Post; //aqui regresamos el objeto creado con el modelo y para exportarlo al servidor
}
