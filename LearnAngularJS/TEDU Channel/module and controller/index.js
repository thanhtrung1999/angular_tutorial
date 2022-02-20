const myApp = angular.module('myModule', [])
myApp.controller('myController', ($scope) => {
  $scope.message = 'AngularJS Application'

  let employee = {
    firstName: 'Thanh',
    lastName: 'Trung',
    gender: 'male'
  }
  $scope.employee = employee
})
// angular.module('myModule', []).controller('myController', ($scope) => {
//   $scope.message = 'AngularJS Application'

//   let employee = {
//     firstName: 'Thanh',
//     lastName: 'Trung',
//     gender: 'male'
//   }
//   $scope.employee = employee
// })