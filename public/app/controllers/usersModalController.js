'use strict';

var UsersModalController = function($uibModalInstance, AuthService, UsersService) {
  var _this = this;
  _this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  _this.userData = UsersService.getUpdatingUserData();

  _this.writeResult = 'Please, enter user data';

  _this.disableName = false;
  if(_this.userData) {
    _this.isUpdate = true;
  }
  else {
    _this.userData = false;
  }
  _this.operation = 'Create User';
  _this.formValues = {
    userName: '',
    password: '',
    admin: false
  };
  if(_this.isUpdate) {
    _this.disableName = true;
    _this.operation = 'Update User';
    _this.formValues.userName = _this.userData.name;
    _this.formValues.password = _this.userData.password;
    _this.formValues.admin = _this.userData.admin;
  }
  _this.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

  _this.ok = function() {
    // update and create things here
    
    if(_this.isUpdate) {
      UsersService.update(_this.formValues).then(
        function(response) {
          _this.writeResult = response.status;
          $uibModalInstance.close(_this.writeResult);
        },
        function(err){
          console.log(error.data.msg);
        }
      );
    }
    else {
      UsersService.insert(_this.formValues).then(
        function(response){
          _this.writeResult = response.status;
          $uibModalInstance.close(_this.writeResult);
        },
        function(err){
          if(err.data.status === 'Duplicated') {
            _this.writeResult = 'That user email was already used; try other';
          }
        }
      );
    }
    
  };
  
};

angular.module(ModuleName).controller('UsersModalController',
  [
    '$uibModalInstance',
    'AuthService',
    'UsersService',
    UsersModalController
  ]
);