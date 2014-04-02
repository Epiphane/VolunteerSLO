/*
 * app.js
 *
 * Responsible for setting up the main app module,
 * as well as routing options so that the app can
 * run smoothly. The actual controller code is
 * kept in controllers.js, which actually handles
 * each view. This is just an "overhead" manager.
 */

var volunteerSLO = angular.module('volunteerSLO', [
   'ngRoute',
   'volunteerSLOControllers'
]);

volunteerSLO.config(['$routeProvider',
   function($routeProvider) {
      $routeProvider.
         when('/home.html', {
            templateUrl: 'partials/home.html',
            controller: 'HomepageCtrl'
         }).otherwise({
             redirectTo: '/home.html'
          });
   }]);