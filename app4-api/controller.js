angular.module('apiApp').controller('ctrl',function($scope,mainSvc){

mainSvc.getShip().then(function(ships){
  $scope.ships = ships;
});

});
