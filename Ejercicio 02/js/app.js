/*Directiva so el modulo principal de angular para la aplicación
 se encargan de manejar la pagina o una parte, encapsulan las entidades, un controlador para alumno, otro para profesor
albergan funciones, variables, pero deben ser lo mas simples */

var app = angular.module('universidadApp', [ ]);

app.controller('profesorCtrl', function ($scope) {

	//this.profesor = profesorData; /*delcaramos una propiedad profesor que se iguala a un objeto, propiedad del controlador*/
	$scope.profesor = profesorData;
})

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}

