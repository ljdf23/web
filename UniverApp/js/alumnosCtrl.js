app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = { };
	$scope.posicion = 3;

	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		
		$scope.alumnos = data;		
	});

}]);