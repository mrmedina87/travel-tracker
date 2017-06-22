class UsersController {
  constructor($location, AuthService,UsersService, $uibModal) {
    this.location = $location;
    this.authService = AuthService;
    this.usersService = UsersService;
    this.uibModal = $uibModal;

    this.usersList = [];
    this.title = 'Users List';
    this.status = '';

    if(!this.authService.isLoggedin() || !this.authService.isAdmin()) {
      this.location.path('login');
    } 

    this.updateUsersList();
  }

  updateUsersList() {
    this.usersService.list().then(response => {
      this.usersList = response.usersList;
    }).catch(() => {
      this.status = 'Something went wrong while trying to retrieve the users list';
    });
  }

  delete(target) {
    this.usersService.delete(target).then(response => {
      this.updateUsersList();
    }).catch(() => {
      this.status = 'Something went wrong while trying to delete a user';
    });    
  }

  logoutClick() {
    this.authService.logout();
    this.location.path('login');
  }

  openModal(user) {
    if(user) {
      this.usersService.setUpdatingUserData(user);
    }
    
    var modalInstance = this.uibModal.open({
      animation: true,
      templateUrl: '/app/views/usersModal.html',
      controller: 'UsersModal',
      controllerAs: 'modal',
      size: 'small'
    });

    modalInstance.result.then(response => {
      this.usersService.setUpdatingUserData(null);
      this.updateUsersList();
    }).catch(canceled => {
      this.usersService.setUpdatingUserData(null);
    });
  }
}

angular.module(ModuleName).controller('Users',
  [     
    '$location',
    'AuthService',
    'UsersService',
    '$uibModal',
    UsersController
  ]
);