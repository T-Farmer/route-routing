angular
  .module('HighwayApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
    .when ('/', {
      controller: 'RootCtrl',
      templateUrl: '/partials/root.html',
    })
    .when ('/7mile', {
      controller: 'SevenCtrl',
      templateUrl: '/partials/7mile.html',
    })
    .when ('/Pch', {
      controller: 'PchCtrl',
      templateUrl: '/partials/pch.html'
    })
  })

.controller ('RootCtrl', function($scope) {
  console.log('I am RootCtrl')
  $scope.primary = () => 'main view'
})

.controller ('SevenCtrl', function($scope) {
  console.log('I am SevenCtrl')
  $scope.second = () => '7 Mile'
})






// console.log('Connected!');

// var app = angular.module('HighwayApp', ['ngRoute'])

// //configure the app

// app.config(($routeProvider) => {
//   $routeProvider
//     .when('/', {
//       controller: 'MainCtrl',
//       templateUrl: 'partials/index.html'
//     })
//     .when('/7mile', {
//       controller: 'SevenCtrl',
//       templateUrl: 'partials/7mile.html'
//     })
//     .when('/pch', {
//       controller: 'PchCtrl',
//       templateUrl: 'partials/pch.html'
//     })
// })

// //create controllers

// app.controller('MainCtrl', function ($scope) {
//   console.log("main controller!")
//   $scope.primary = "main view"
// })

// app.controller('SevenCtrl', function ($scope) {

//   console.log("Seven Mile Bridge!!")
//   $scope.second = "first bridge"
// })
