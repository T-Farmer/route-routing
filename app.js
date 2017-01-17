console.log('Connected!');

var app = angular.module('HighwayApp', ['ngRoute'])

//configure the app

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'index.html'
    })
    .when('/7mile', {
      controller: 'SevenCtrl',
      templateUrl: 'partials/7mile.html'
    })
    .when('/pch', {
      controller: 'PchCtrl',
      templateUrl: 'partials/pch.html'
    })
})

//create controllers

app.controller('MainCtrl', function ($scope) {

  $scope.primary = "main view"
})

app.controller('SevenCtrl', function ($scope) {

  console.log("Seven Mile Bridge!!")
})
