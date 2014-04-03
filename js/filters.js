/*
 * filters.js
 *
 * Right now it only filters the categories based on the 
 * title of an event and categories, but we can always 
 * expand on it.
 *
 */

var volunteerSLOFilters = angular.module('volunteerSLOFilters', [])

volunteerSLOFilters.filter('eventList', function() {
   return function(events, eventName, categoryFilters) {
      var newEvents = [];
      var maxScore;

      events.forEach(function(event) {
         if(event.title.search(eventName) != -1) {
            event.score = maxScore = 0;
            for(var ndx = 0; ndx < categoryFilters.length; ndx ++) {
               if(categoryFilters[ndx]) {
                  maxScore ++;
                  if(event.categories.indexOf(ndx) != -1)
                     event.score ++;
               }
            }

            if(event.score > 0 || maxScore == 0)
               newEvents.push(event);
         }
      });

      // Sort the events by score and return the list
      return newEvents.sort(function(a, b) {
         return b.score - a.score;
      });
   };
});