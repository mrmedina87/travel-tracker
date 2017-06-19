'use strict';

var SignUpController = function($location, SignUpService) {
  this.statusMsg = 'Please, enter user and password';
  var _this = this;
  _this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  this.signUpClick = function(us) {
    if(us.email && us.pass) {
      SignUpService.signUp(us.email, us.pass).then(
        function(response) {
          _this.statusMsg = response.successMsg;
          $location.path('/login');
        },
        function(error) {
          if(error.status === 409) {
            _this.statusMsg = error.data.status;
          }
          else {
            _this.statusMsg = error.data.msg;
          }
        }
      );
    }
    else {
      _this.statusMsg = 'Looks like your credentials are wrong!';
    }
  };
};

angular.module(ModuleName).controller('SignUpController', [
    '$location',
    'SignUpService',
    SignUpController
  ]
);