'use strict';

var TravelsService = function($window, FactoryTravelResources) {
  var updatingTravelData = null;
  
  this.getUpdatingTravelData = function() {
    return updatingTravelData;
  };

  this.setUpdatingTravelData = function(trvl) {
    updatingTravelData = trvl;
  };

  this.list = function() {
    var methodParams = {};
    var potentialRes = FactoryTravelResources($window.localStorage.token);
    return potentialRes.list(methodParams).$promise;
  };

  this.query = function(start, end) {
    var methodParams = {
      param: start,
      end: end
    };
    var potentialRes = FactoryTravelResources($window.localStorage.token);
    return potentialRes.list(methodParams).$promise;
  }

  this.delete = function(trgt) {
    var methodParams = {
      param: trgt
    };
    var potentialRes = FactoryTravelResources($window.localStorage.token);
    return potentialRes.delete(methodParams).$promise;
  };

  this.insert = function(trvl) {
    var methodParams = {
      start: trvl.start,
      end: trvl.end,
      comment: trvl.comment, 
      destination: trvl.destination
    };
    var potentialRes = FactoryTravelResources($window.localStorage.token);
    return potentialRes.insert(methodParams).$promise;
  };

  this.update = function(trvl) {
    var methodParams = {
      _id: trvl._id,
      start: trvl.start,
      end: trvl.end,
      comment: trvl.comment, 
      destination: trvl.destination
    };
    var potentialRes = FactoryTravelResources($window.localStorage.token);
    return potentialRes.update(methodParams).$promise;
  };
};

angular.module(ModuleName).service('TravelsService', 
  [
    '$window',
    'FactoryTravelResources',
    TravelsService
  ]
);