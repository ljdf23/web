(function(){

var app = angular.module('universidadApp',[ ]);

//Los corchetes son para mandar parametros adicionales a los controladores//
app.controller('listadoCtrl', ['$scope', function($scope){

	$scope.listado = ["Fernando Herrera", "Melissa Flores", "Juan Carlos Pineda", "Maria Perez"];
	$scope.listadoProfesores = {
		profesores: [{
			nombre: "Fernando Herrera",
			edad: 29,
			clase: "PE"
		},
		{
			nombre: "Melissa Flores",
			edad: 24,
			clase: "ICE"
		},
		{
			nombre: "Juan Carlos",
			edad: 34,
			clase: "ME110"
		}]
	}
}
]);


})();  
