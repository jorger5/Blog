// dependencias iniciales: express (servidor), dotenv (config files)
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

// Para usar el archivo dotenv
dotenv.config( {path: "./config/config.env"});


// Inicia el servidor
const app = express();

// Nos permite hacerle un parse al JSON
app.use(express.urlencoded( { extended: false }))
app.use(express.json())





// ACCIONES CON LA BASE DE DATOS---------------------------------------------------

// Para DB de Posts:
// 1) Me traigo la DB


const { Post }= require("./config/db")

// 2) Métodos de la DB Posts: 
// Método GET: Trae todos los posts del blog
app.get("/posts", (req,res) => {
  Post.findAll()
  .then( post => {
    console.log(`Todos los posts extraidos`.underline.green.bold);
    res.send(post);
  })
})

// Método POST: Crea un nuevo post en el blog

app.post("/posts", (req,res) => {
  console.log(req.body);
  Post.create({
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    imagen: req.body.imagen,
    categoria: req.body.categoria,
    autor: req.body.autor,
    fecha: req.body.fecha,
  }).then(post => {
    console.log(`Blog Post hecho`.underline.green.bold);
    res.json(post);
  })
})

// Método GET: id: Trae un post según su ID

app.get("/posts/:id", (req, res) => {
  let postId = req.params.id;
  Post.findOne( { where: { id: postId }})
    .then(post => {
      res.json(post)
      console.log(`Blog Post extraido`.underline.green.bold);
    })
})

// Método PATCH: id: Edita un post según su ID

app.patch("/posts/:id", (req, res) =>{
  let postId = req.params.id;
  let newData = req.body;
  Post.findOne( { where: { id: postId }})
    .then( post => { 
      post.update(newData)
      .then( newBlog => {
        res.json(newBlog)
        console.log(`Post modificado`.underline.blue.bold);
      })
    })
})

// Método DELETE: id: Borra un post según su ID

app.delete("/posts/:id", (req,res) => {
  let postId = req.params.id;
  Post.destroy({
    where: { id: postId }
  }).then(() => {
    res.send("Post borrado");
    console.log(`Post borrado`.underline.red.bold);
  })
})


// Para DB de Users:
// 1) Me traigo la DB

const { User }= require("./config/db-users")

// 2) Métodos de la DB Usuarios: 
// Método GET: Trae todos los posts del blog
app.get("/usuarios", (req,res) => {
  User.findAll()
  .then( post => {
    console.log(`Todos los usuarios extraidos`.underline.green.bold);
    res.send(post);
  })
})

// Método POST: Crea un nuevo usuario

app.post("/usuarios", (req,res) => {
  console.log(req.body);
  User.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    mail: req.body.mail,
    fecha: req.body.fecha,
  }).then(post => {
    console.log(`Usuario creado`.underline.green.bold);
    res.json(post);
  })
})

// Método GET: id: Trae un usuario según su ID

app.get("/usuarios/:id", (req, res) => {
  let postId = req.params.id;
  User.findOne( { where: { id: postId }})
    .then(post => {
      res.json(post)
      console.log(`Información de usuario obtenida`.underline.green.bold);
    })
})

// Método PATCH: id: Edita un usuario según su ID

app.patch("/usuarios/:id", (req, res) =>{
  let postId = req.params.id;
  let newData = req.body;
  User.findOne( { where: { id: postId }})
    .then( post => { 
      post.update(newData)
      .then( newBlog => {
        res.json(newBlog)
        console.log(`Usuario modificado`.underline.blue.bold);
      })
    })
})

// Método DELETE: id: Borra un usuario según su ID

app.delete("/usuarios/:id", (req,res) => {
  let postId = req.params.id;
  User.destroy({
    where: { id: postId }
  }).then(() => {
    res.send("Post borrado");
    console.log(`Usuario borrado`.underline.red.bold);
  })
})





// CONFIGURACIONES FINALES DEL SERVIDOR-------------------------------------

// Esto busca el puerto del config y si no funciona, usa el puerto 5000
const PORT = process.env.PORT || 5000;

// Imprime en la cónsola
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el Puerto ${PORT}`.blue.bold);
});