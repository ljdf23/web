var app = angular.module('facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function($http, $q){
 
	 var self = {
	 		config: {},
	 		cargar : function() {

	 			var d = $q.defer();

	 			$http.get('configuracion.json')
	 				.then(function(data){
	 					self.config = data.data;
	 					d.resolve();
	 				})

	 			return d.promise;
	 		}
	 }
 
	 return self;
}])