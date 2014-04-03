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

volunteerSLOControllers.controller('EventListCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
      $scope.eventId = $routeParams.eventId;
		$scope.categoryFilters = [];

      $scope.events = [
         { id: 0, title: 'Paint Dan\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [0, 1] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [1] },
         { id: 0, title: 'Paint Jam\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [1] },
         { id: 0, title: 'Paint Bob\'s fence for fun!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [0, 1] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [0] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: [0] }
      ];

      $scope.categories = [
         { id: 0, name: 'Physical' },
         { id: 1, name: 'One-time' }
      ];

      $scope.setCategory = function(categoryID) {
         $scope.categoryFilters[categoryID] = $(".category-box-"+categoryID)[0].checked;
		}
   }
]);

volunteerSLOControllers.controller('EventCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
      $scope.eventId = $routeParams.eventId;
   }
]);