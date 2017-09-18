var app = angular.module('promesaApp.servicios', []);

app.factory('Personas', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
	 
	var self =  {
 		"cargando": false,
 		"mensaje": "",
 		"data":	[]
 	};

	self.cargarData = function() {
	self.cargando = true;	
	
	var q = $q.defer();	

	$http.jsonp("http://www.json-generator.com/api/json/get/bOkCoNpdmG?callback=JSON_CALLBACK")
		 .then (function success(respuesta) {  //callback... para que no marque error domain chrome

				setTimeout(function() {	
					q.resolve( respuesta.data );
				}, 1000);
		 
				//self.cargando = false;
				//self.data = respuesta.data;

				//console.log("Todo bien");
				//console.log(respuesta);
			},
			function error(response) {
				console.log(":_(" + response)
				q.reject("Error al cargar")
			});

			return q.promise; //siempre debe regresar la promesa
 	};

 	$rootScope.promise = self.cargarData();
 	$rootScope.promise.then( function(data) {
 								self.cargando = false;
 								self.mensaje = "Información cargada correctamente";
 								self.data = data;
						 	} ,
						 	function(error){
						 		self.cargando = false;
						 		self.mensaje = "Error al cargar la data"
						 		console.log(error);	
						 	} );

    self.cargarData();
	return self;

}])