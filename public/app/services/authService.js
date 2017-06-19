'use strict';

var AuthService = function(AuthResource, $window) {

  this.setSessionData = function(u, t, a) {
    $window.localStorage.user = u;
    $window.localStorage.token = t;
    if(a)
      $window.localStorage.admin = "true";
    else
      $window.localStorage.admin = "";
  };

  this.isLoggedin = function() {
    if($window.localStorage.token && $window.localStorage.user) {
      return true;
    }
    return false;
  }

  this.isAdmin = function() {
    if($window.localStorage.admin) {
      return true;
    }
    return false;
  }

  this.getUser = function() {
    return $window.localStorage.user;
  }

  this.login = function(usr, pswrd) {
    var rpcConfig = {
      userName: usr,
      password: pswrd
    };
    return AuthResource.executeRpc(rpcConfig).$promise;
  };

  this.logout = function() {
    this.setSessionData('','', false);
  };

  this.isEmpty = function() {
    return AuthResource.isEmpty().$promise;
  };
};

angular.module(ModuleName).service('AuthService', 
  [
    'AuthResource', 
    '$window',
    AuthService
  ]
);