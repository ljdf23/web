
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.mensaje ='Hola chayo';
	$scope.titulo ='Título';
	$scope.subtitulo ='Subtitulo';

	$scope.borradoMensaje = 'abc';

	$scope.mostrar_alerta = function(){ 
			swal($scope.mensaje);
	};

	$scope.mostrar_subtitulo = function(){
	     	swal($scope.titulo, $scope.subtitulo);
	};

	$scope.mostrar_confirmacion = function(){
	     swal({
			  title: $scope.titulo,
			  text: "Once deleted, you will not be able to recover this imaginary file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			  confirmButtonText: "Si, borrarlo",
			})
			.then((willDelete) => {
			  if (willDelete) {

			  	$scope.borradoMensaje = "Archivo borrado";
			  	$scope.$apply(); //para ejecutar accciones asincronas

			    swal("ha sido borrado!", {
			      icon: "success", 
			    });
			  } else {
			    swal("no ha sido borrado, esta a salvo!"); 
			  }
			}); 
	};

	$scope.mostrar_input = function() {

			swal({
			  text: 'hola , busca una pelicula aqui".',
			  content: "input",
			  button: {
			    text: "Search!",
			    closeModal: false,
			  },
			})
			.then(name => {
			  	if (!name) throw null;
			 
			 	 return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
			})
			.then(results => {
			  	return results.json();
			})
			.then(json => {
				  const movie = json.results[0];
				 
				  if (!movie) {
				    return swal("No movie was found!");
				  }
				 
				  const name = movie.trackName;
				  const imageURL = movie.artworkUrl100;
				 
				  swal({
				    title: "Top result:",
				    text: name,
				    icon: imageURL,
				  });
			})
			.catch(err => {
				  if (err) {
				    swal("Oh noes!", "The AJAX request failed!", "error");
				  } else {
				    swal.stopLoading();
				    swal.close();
				  }
			});
	};
 
}]);
