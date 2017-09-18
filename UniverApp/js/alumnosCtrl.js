app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = { };
	$scope.posicion = 3;

	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		console.log('success');
		$scope.alumnos = data;		
	}).error(function(data, status) {
	  console.error('Repos error', status, data);
	})
	.finally(function() {
	  console.log("finally finished repos");
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {
			$scope.posicion += 3;
		}
	}


	$scope.anteriores = function(){

		if ($scope.alumnos.length > 3) {
			$scope.posicion -= 3;
		}
	}

}]);