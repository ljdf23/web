var app = angular.module('promesaApp.controladores', []);

app.controller('personasCtrl', ['$scope', 'Personas', function($scope, Personas){   //Personas como se llama el facgtory
	
 	$scope.personas = Personas;

}]);
