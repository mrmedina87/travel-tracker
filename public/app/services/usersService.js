'use strict';

var UsersService = function($window, UsersResource) {
  var updatingUserData = null;
  
  this.getUpdatingUserData = function() {
    return updatingUserData;
  };

  this.setUpdatingUserData = function(user) {
    updatingUserData = user;
  };

  this.list = function() {
    var methodParams = {
      param: $window.localStorage.user
    };
    return UsersResource.list(methodParams).$promise;
  };

  this.delete = function(trgt) {
    var methodParams = {
      param: trgt
    };
    return UsersResource.delete(methodParams).$promise;
  };

  this.insert = function(usr) {
    var methodParams = {
      name: usr.userName,
      password: usr.password,
      admin: usr.admin 
    };
    return UsersResource.insert(methodParams).$promise;
  };

  this.update = function(usr) {
    var methodParams = {
      name: usr.userName,
      password: usr.password,
      admin: usr.admin 
    };
    return UsersResource.update(methodParams).$promise;
  };
};

angular.module(ModuleName).service('UsersService', 
  [
    '$window',
    'UsersResource', 
    UsersService
  ]
);