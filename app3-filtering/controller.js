angular.module('myApp').controller('myCtrl',function($scope,myService) {

$scope.employees = myService.getEmployees();

});
