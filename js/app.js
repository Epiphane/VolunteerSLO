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
   'volunteerSLOControllers',
   'ui.bootstrap'
]);

volunteerSLO.config(['$routeProvider',
   function($routeProvider) {
      $routeProvider.
         when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomepageCtrl'
         }).
         when('/event/:eventId', {
            templateUrl: 'partials/event.html',
            controller: 'EventCtrl'
         }).
          when('/about', {
             templateUrl: 'partials/event.html',
             controller: 'EventCtrl'
          }).
         otherwise({
            redirectTo: '/'
         });
   }]).
   directive('navTabs', ['$location', function(location) {
      return {
         restrict: 'A',
         link: function(scope, element) {
            var $ul = $(element);
            $ul.addClass("nav");

            var $tabs = $ul.children();
            var tabMap = {};
            $tabs.each(function() {
               var $li = $(this);
               //Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
               tabMap[$li.find('a').attr('href').substring(1)] = $li;
            });

            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
               $tabs.removeClass("active");
               tabMap[newPath].addClass("active");
            });
         }
      };
   }]);