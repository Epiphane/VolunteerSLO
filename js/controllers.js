/*
 * controllers.js
 *
 * Reponsible for setting up all the controllers for
 * our app, which means that it will handle all the
 * different pages and stuff. The main code, you could
 * call it.
 */

var volunteerSLOControllers = angular.module('volunteerSLOControllers', []);

volunteerSLOControllers.controller('HomepageCtrl', ['$scope',
   function($scope) {
      $scope.name = 'Volunteer SLO';
      $scope.banner = 'What are you waiting for?';

      $scope.events = [
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6 }
      ];
   }
]);

volunteerSLOControllers.controller('EventListCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
      $scope.eventId = $routeParams.eventId;
		$scope.categoryFilters = [];

      $scope.events = [];

      $http.post('index.php', { action: 'eventList', params: [] }).success(function(data) {
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

volunteerSLOControllers.controller('EventCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http) {
      $scope.eventId = $routeParams.eventId;

      $scope.event = null;

      $http.post('index.php', { action: 'event', id: $scope.eventId }).success(function(data) {
         $scope.event = data;
      });
   }
]);