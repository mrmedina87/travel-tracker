'use strict';

var NotFound = function($location) {
  this.message = '404 not found - TravelTracker';
};

angular.module(ModuleName).controller('NotFound', 
  [
    '$location',
    NotFound
  ]
);