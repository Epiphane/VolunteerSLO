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

      if(eventName)
         eventName = eventName.toLowerCase();

      events.forEach(function(event) {
         if(event.title.toLowerCase().search(eventName) != -1) {
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

      if(maxScore > 0) {
         newEvents.sort(function(a, b) {
            if(b.score - a.score == 0) {
               return 1;
            }
            return b.score - a.score;
         });
      }
      // Sort the events by score and return the list
      return newEvents;
   };
});