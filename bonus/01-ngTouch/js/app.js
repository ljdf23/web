
var app = angular.module('bonusApp',[ 'ngTouch' ] );

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.mostrar_alerta = function(){
		alert("Mostrar alerta");
	}
}]);
