const myApp = angular.module('scopeDemo', [])
myApp.controller('classController', ($scope, $rootScope) => {
  $rootScope.test = "Test root scope"
  $scope.name = "Trung"
  $scope.sayHello = () => {
    $scope.name = `Hello ${$scope.name}`
  }
})
myApp.controller('schoolController', ($scope, $rootScope) => {
  $scope.name = "Thanh"
  $scope.sayHello = () => {
    $scope.name = `Hello ${$scope.name}`
  }
})