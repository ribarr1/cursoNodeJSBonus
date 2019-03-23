
const {cursos} = require ('./cursos');
const express = require('express');
const app = express();

function obtenerCurso(i)
{
  texto1=('<br>'+cursos[i].id + '      '+cursos[i].nombre+'       '+cursos[i].duracion+'       '+cursos[i].precio+'       '+cursos[i].inicio+'<br>');
  return texto1;
}

function mostrarEncabezado()
{
  texto2 =('<br><br>id      nombre del curso      Duracion      Precio      Fecha de Inicio <br>');
  return texto2;
}


function devolverCursos()
{
 texto = mostrarEncabezado()
 for(var i=0;i<cursos.length;i++){
    texto+= obtenerCurso(i,(i+1));
 };
 return texto
}
 
devolverCursos();


 module.exports = {
 	devolverCursos
};


app.get('/', function (req, res) {
   res.send(texto);
})

app.listen(8082)

console.log("Verifica tus CURSOS en el navegador por la siguiente url:  http://localhost:8082");




