const myApp = angular.module('app', [])
myApp.controller('processingStringCtrl', processingStringCtrl)
processingStringCtrl.$inject = ['$scope', 'StringService']

function processingStringCtrl($scope, StringService) {
  $scope.input = ''
  $scope.transformString = function (input) {
    $scope.output = StringService.transformString(input)
  }
}