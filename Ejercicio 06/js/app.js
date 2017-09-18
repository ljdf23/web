(function(){

var app = angular.module('ejemplosApp',[ ]);



//Se inyectan los valores http al controlador
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.profesores = {};
  //Angular trae el archivo jsony y si es correcto lo pasa a la funcion en la variable 'data'
  $http.get('json/profesores.json').success(function(data) {  //data es de retorno
  		//Codigo cuando es correcta la petición, mediante Ajax

		//seteamos el objeto//
  		$scope.profesores = data.profesores;

  })


  



}]);





})();
