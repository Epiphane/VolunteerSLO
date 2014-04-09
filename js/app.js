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
   'ngAnimate',
   'facebook',
   'volunteerSLOControllers',
   'volunteerSLOFilters',
   'ui.bootstrap'
]);

volunteerSLO.config(['$routeProvider',
   function($routeProvider) {
      $routeProvider.
         when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomepageCtrl'
         }).
         when('/events/:eventId', {
            templateUrl: 'partials/event.html',
            controller: 'EventCtrl'
         }).
         when('/events', {
             templateUrl: 'partials/events.html',
             controller: 'EventListCtrl'
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

            var $tabs = $ul.children();
            var tabMap = {};
            $tabs.each(function() {
               var $li = $(this);
               //Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
               var href = $li.find('a').attr('href');
               if(href)
                  tabMap[href] = $li;
            });

            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
               $tabs.removeClass("active");
               if(tabMap[newPath])
                  tabMap[newPath].addClass("active");
               else {
                  newPath = newPath.substring(0, newPath.substring(1).indexOf("/") + 1);

                  if(tabMap[newPath])
                     tabMap[newPath].addClass("active");
               }
            });
         }
      };
   }]).
   directive('userImage', ['Facebook', function(Facebook) {
      return {
         restrict: 'A',
         link: function(scope, element) {
            scope.$watch(function() { return Facebook.user }, function(newUser) {
               if(!jQuery.isEmptyObject(newUser)) {
                  newUser.img_url = 'http://graph.facebook.com/' + newUser.id + '/picture';
                  console.log(newUser.img_url);

                  var $picture_li = $(element);
                  var $picture = $picture_li.children()[0];
                  
                  $picture.setAttribute('src', newUser.img_url);
               }
            });
         }
      };
   }]);
