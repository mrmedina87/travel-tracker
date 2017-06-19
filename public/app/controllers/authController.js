'use strict';

var AuthController = function($location, AuthService) {
  this.statusMsg = 'Please, enter user and password';
  var _this = this;
  _this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  AuthService.isEmpty().then(function(resp){
    if(resp.empty) {
      $location.path('/signup');
    }
  },
  function(err) {
    _this.statusMsg = "Something went wrong. Try later or contact an admin person."
  });

  this.loginClick = function(us) {
    if(us.email && us.pass) {
      AuthService.login(us.email, us.pass).then(
        function(response) {
          _this.statusMsg = response.successMsg;
          AuthService.setSessionData(us.email, response.token, response.admin);
          if(response.admin) {
            $location.path('/users');  
          }
          else {
            $location.path('/');
          }
        },
        function(error) {
          _this.statusMsg = error.data.msg;
        }
      );
    }
    else {
      _this.statusMsg = 'Looks like your credentials are wrong';
    }
  };
};

angular.module(ModuleName).controller('AuthController', [
    '$location',
    'AuthService',
    AuthController
  ]
);