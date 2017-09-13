(function(){

var app = angular.module('universidadApp',[ ]);



app.controller('listadoCtrl', ['$scope', function($scope){

  $scope .items = [
                    {name: 'one', age: 30},
                    {name: 'two', age: 40},
                    {name: 'three', age: 50},
                  ]

  $scope.itemsArray = ["hola","adios"]

  $scope.paisSeleccionado = "ARE";

  $scope.paises = [
      { id:"CRI", nombre:"COSTA RICA"},
      { id:"HRV", nombre:"CROACIA"},
      { id:"CUB", nombre:"CUBA"},
      { id:"DNK", nombre:"DINAMARCA"},
      { id:"DMA", nombre:"DOMINICA"},
      { id:"DOM", nombre:"REPÚBLICA DOMINICANA"},
      { id:"ECU", nombre:"ECUADOR"},
      { id:"EGY", nombre:"EGIPTO"},
      { id:"SLV", nombre:"EL SALVADOR"},
      { id:"ARE", nombre:"EMIRATOS ÁRABES UNIDOS"},
      { id:"ERI", nombre:"ERITREA"},
      { id:"SVK", nombre:"ESLOVAQUIA"},
      { id:"SVN", nombre:"ESLOVENIA"},
      { id:"ESP", nombre:"ESPAÑA"},
      { id:"USA", nombre:"ESTADOS UNIDOS"},
      { id:"EST", nombre:"ESTONIA"}
  ];
 
 
}]);





})();
