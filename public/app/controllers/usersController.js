'use strict';

var UsersController = function($location, AuthService,UsersService, $uibModal) {
  var _this = this;
  _this.usersList = [];
  _this.title = 'Users List'

  if(!AuthService.isLoggedin() || !AuthService.isAdmin()) {
    alert("You should login as admin in order to access this view");
    $location.path('login');
  } 

  var updateUsersList = function() {
    UsersService.list().then(
      function(response) {
        _this.usersList = response.usersList;
      },
      function(error) {
        console.log(error);
      }
    );
  };

  _this.delete = function(target) {
    UsersService.delete(target).then(
      function(response) {
        updateUsersList();
      },
      function(error) {
        console.log(error);
      }
    );    
  };

  _this.logoutClick = function() {
    AuthService.logout();
    $location.path('login');
  };

  _this.openModal = function(user) {
    if(user) {
      UsersService.setUpdatingUserData(user);
    }
    
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/app/views/usersModal.html',
      controller: 'UsersModalController',
      controllerAs: 'modal',
      size: 'small'
    });

    modalInstance.result.then(
      function(response) {
        UsersService.setUpdatingUserData(null);
        updateUsersList();
      },
      function(canceled) {
        UsersService.setUpdatingUserData(null);
      }
    );
  };

  updateUsersList();
};

angular.module(ModuleName).controller('UsersController',
  [     
    '$location',
    'AuthService',
    'UsersService',
    '$uibModal',
    UsersController
  ]
);