var express = require('express');
var router = express.Router();
//simular BD

var tablaLibros = {"id":1 ,"titulo":"el perfume", "autor":"ptrick suskind"};

var tablaLibros2 =[{"id":1 ,"titulo":"el perfume", "autor":"ptrick suskind"},
{"id":2 ,"titulo":"hobbit", "autor":"tolkien"},
{"id":3 ,"titulo":"la biblia", "autor":"apostoles"}];

router.get('/', function(req, res, next) {
  //aqui se reliazria la consulta a BD
  res.status(200).json(tablaLibros2);

});

router.get('/:idLibro',(req, res, next)=>{
  var id= req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
});

router.post('/:idLibro',(req, res, next)=>{
  res.status(400).json({"error": "operacion no permitida"});
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  var libro = {
    'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
    'titulo':req.body.titulo,
    'autor':req.body.autor
  };
  //  insert en CD del objeto
  tablaLibros2.push(libro);
  // Respuesta de DB al cliente
  res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
});

router.patch('/:idLibro',(req, res, next)=>{
  var id= req.params.idLibro;
  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.autor;
  res.status(200).json({"mensaje":"actualizado"});
});

router.delete('/:idLibro',(req, res, next)=>{
  var id= req.params.idLibro;
  var eliminado=tablaLibros2.splice(id-1,1);
  res.status(200).json("eliminado")
})
module.exports = router;
