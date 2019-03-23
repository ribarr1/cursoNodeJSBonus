const {cursos} = require ('./cursos');
const {devolverCursos} = require ('./mostrarCursos');
//const fs = require('fs');
const express = require('express');
const app = express();
let texto = "";
const opciones = {
	nombre:{
		demand: true,
		alias: 'n'
	},
	curso:{
		demand: true,
		alias:'c'
	},
	cedula:{
		demand: true,
		alias:'d'
	}

}

const argv = require('yargs')
	.command('inscribir','Inscripcion al curso deseado', opciones)
	.argv


let
idCurso = cursos.find(k => k.id == argv.curso);


let crearArchivo = (cursoDeInteres) =>{


	texto = 'Informacion referente a la inscripcion del estudiante <br>' +
			'El nombre del estudiante es: ' + argv.nombre + '<br>' +
			'cedula: ' + argv.d + '<br>' +
			'el curso de interes es: '+cursoDeInteres.nombre + '<br>' +
			'con un precio de: '+cursoDeInteres.precio + '<br>' +
			'y la fecha de inicio es: '+cursoDeInteres.inicio+'<br>';
	texto+=devolverCursos();		


	//fs.writeFile('inscripcion.txt', texto, (err) => {
		//if (err) throw(err);
	//	console.log ('<br><br> Se ha creado el archivo inscripcion.txt con los datos de su inscripcion,  a continuacion listamos  nuestros cursos disponibles: <br><br>')
	//});			
}

if (idCurso === undefined) {
	texto=('<br><br> El id del curso es Invalido, verifique los id de los cursos existentes,  a continuacion se listan para su informacion: <br><br>')
	

}else{
	crearArchivo(idCurso);
}


app.get('/', function (req, res) {
   res.send(texto);
})

app.listen(8081)

console.log("Verifica tu navegador en la siguiente url:  http://localhost:8081");





