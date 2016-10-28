angular.module('apiApp').service('mainSvc',function($http){

  this.getShip = function() {
    return $http ({
      method: 'GET',
      url: 'http://swapi.co/api/starships'
    }).then(function(response){
      if(response.status === 200){
      return response.data.results;
    } return 'The death star blew up our request';
  });
  };

});
