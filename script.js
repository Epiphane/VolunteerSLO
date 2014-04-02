// Code goes here

var GATapp = angular.module('GATapp', []). // route configuration of view and controllers
    config(['$routeProvider', function ($routeProvider) {
       $routeProvider.
           when('/home.html', {
              templateUrl: 'welcome-msg.html',
              controller: TestController
           }).otherwise({redirectTo: "/home.html"});
    }]);

function TestController($scope) {
   $scope.name = 'Welcome to the Game Analytics Portal';
}