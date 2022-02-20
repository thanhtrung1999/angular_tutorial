const myApp = angular.module('directiveDemo', [])
myApp.controller('myController', ($scope, $rootScope) => {
  
}).directive("welcomeText", () => {
  return {
    template: "<h1>Welcome Trung</h1>", 
  }
})
