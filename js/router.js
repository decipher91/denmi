var danApp = angular.module('danApp', ['ngRoute']);

danApp.config(function($routeProvider, $locationProvider, $provide) {
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true)
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'home.html',
        controller  : 'contentController'
      })

      .when('/video', {
        templateUrl : 'video.html',
        controller  : 'contentController'
      })

      .when('/music', {
        templateUrl : 'music.html',
        controller  : 'contentController'
      })

      .when('/about', {
        templateUrl : 'about.html',
        controller  : 'contentController'
      })

      // default
      .otherwise({
        redirectTo: '/'
      });
  });

danApp.controller('contentController', ['$scope', '$location', function($scope, $location){
  $scope.setRoute = function(route){
    $location.path(route);
  };

    $scope.showPopup = function() {
      $('.popup-layer').show();
      $('.close-popup').show();
      $('.aboutme-btn').show();
      
    };

    $scope.hidePopup = function() {
      $('.popup-layer').hide();
      $('.close-popup').hide();
      $('.aboutme-btn').hide();
    };
  
}])
