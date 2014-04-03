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
	  var newEvents = events.slice(0);
	  
	  newEvents.splice(0, 1);
	  console.log(newEvents);
	  return newEvents;
  };
});