angular.module('myApp').controller('arrayController', function($scope,arrayService){

$scope.employees = arrayService.getData();
});
