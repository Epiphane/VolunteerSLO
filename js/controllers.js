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

      $scope.leftColumn = function() {

      }
   }
]);

volunteerSLOControllers.controller('EventListCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
      $scope.eventId = $routeParams.eventId;

      $scope.events = [
         { id: 0, title: 'Paint Dan\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['Physical', 'One-time'] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['One-time'] },
         { id: 0, title: 'Paint Jam\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['Physical', 'One-time'] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['Physical', 'One-time'] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['Physical', 'One-time'] },
         { id: 0, title: 'Paint Bob\'s fence!', description: 'Let\'s all go paint a fence!',
            volunteers: 9, signedUp: 6, categories: ['Physical', 'One-time'] }
      ];

      $scope.categories = [
         { varName: 'physical', name: 'Physical' },
         { varName: 'onetime', name: 'One-time' }
      ];
   }
]);

volunteerSLOControllers.controller('EventCtrl', ['$scope', '$routeParams',
   function($scope, $routeParams) {
      $scope.eventId = $routeParams.eventId;
   }
]);