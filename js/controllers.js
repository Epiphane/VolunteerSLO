/*
 * controllers.js
 *
 * Reponsible for setting up all the controllers for
 * our app, which means that it will handle all the
 * different pages and stuff. The main code, you could
 * call it.
 */

var volunteerSLOControllers = angular.module('volunteerSLOControllers', []);

volunteerSLOControllers.config(['FacebookProvider',
   function(FacebookProvider) {
      FacebookProvider.setAppId('226419177558166');

      FacebookProvider.init()
   }
]);

volunteerSLOControllers.controller('HeaderCtrl', ['$scope', 'Facebook', '$location',
   function($scope, Facebook, location) {
      $scope.loggedIn = false;

      $scope.$watch(function() { return Facebook.loggedIn; }, function(loggedIn) {
         $scope.loggedIn = !!loggedIn;
      });

      Facebook.getLoginStatus(function(response) {
         if(response.status == 'connected') {
            Facebook.api('/me', function(response) {
               Facebook.loggedIn = true;
               Facebook.user = response;
            });
         }   
      });

      /**
       * Logout
       */
      $scope.logout = function() {
         Facebook.logout(function() {
            $scope.$apply(function() {
               Facebook.loggedIn = false;
               Facebook.user = {};
            });
         });
      }
   }
]);

volunteerSLOControllers.controller('HomepageCtrl', ['$scope', '$http', 
   function($scope, $http) {
      $scope.name = 'Volunteer SLO';
      $scope.banner = 'What are you waiting for?';

      $scope.events = [];

      $http.post('srv.php', { action: 'eventList', params: [], featured: true }).success(function(data) {
         $scope.events = data;
      });
   }
]);

volunteerSLOControllers.controller('EventListCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
      $scope.eventId = $routeParams.eventId;
		$scope.categoryFilters = [];

      $scope.events = [];

      $http.post('srv.php', { action: 'eventList', params: [] }).success(function(data) {
         $scope.events = data;
      });

      $scope.categories = [
         { id: 0, name: 'Physical' },
         { id: 1, name: 'One-time' }
      ];

      $scope.setCategory = function(categoryID) {
         $scope.categoryFilters[categoryID] = $(".category-box-"+categoryID)[0].checked;
		}
   }
]);

volunteerSLOControllers.controller('EventCtrl', ['$scope', '$routeParams', '$http', 'Facebook', 
   function($scope, $routeParams, $http, Facebook) {
      $scope.eventId = $routeParams.eventId;

      $scope.facebookReady = false;
      $scope.loggedIn = false;

      $scope.$watch(
         function() {
            return Facebook.isReady();
         },
         function(newVal) {
            if(newVal)
               $scope.facebookReady = true;   
         }
      );

      $scope.$watch(
         function() { return Facebook.loggedIn; },
         function(newVal) {
            $scope.loggedIn = !!Facebook.loggedIn;
         });

      /**
       * Intentionally login - check whether they're logged in, then make them log in.
       */
      $scope.IntentLogin = function() {
         Facebook.getLoginStatus(function(response) {
            if(response.status == 'connected') {
               $scope.me();
            }
            else {
               $scope.login();
            }
         });
      }

      $scope.login = function() {
         Facebook.login(function(response) {
            if(response.status == 'connected') {
               $scope.me();
            }
         });
      }

      /**
       * Get user info
       */
      $scope.me = function() {
         Facebook.api('/me', function(response) {
            $scope.$apply(function() {
               Facebook.loggedIn = true;
               Facebook.user = response;
            });
         });
      }

      $scope.event = null;

      $http.post('srv.php', { action: 'event', id: $scope.eventId }).success(function(data) {
         $scope.event = data;
      });
   }
]);
