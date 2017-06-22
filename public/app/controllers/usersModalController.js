class UsersModalController {
  constructor($uibModalInstance, AuthService, UsersService) {
    this.uibModalInstance = $uibModalInstance;
    this.authService = AuthService;
    this.usersService = UsersService;

    this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    this.userData = UsersService.getUpdatingUserData();

    this.writeResult = 'Please, enter user data';

    this.disableName = false;
    if(this.userData) {
      this.isUpdate = true;
    }
    else {
      this.userData = false;
    }
    this.operation = 'Create User';
    this.formValues = {
      userName: '',
      password: '',
      admin: false
    };
    if(this.isUpdate) {
      this.disableName = true;
      this.operation = 'Update User';
      this.formValues.userName = this.userData.name;
      this.formValues.password = '';
      this.formValues.admin = this.userData.admin;
    }
  }

  cancel() {
    this.uibModalInstance.dismiss('cancel');
  }

  ok() {    
    if(this.isUpdate) {
      this.usersService.update(this.formValues).then(response => {
        this.writeResult = response.status;
        this.uibModalInstance.close(this.writeResult);
      }).catch(err => {
        this.writeResult = 'Something went wrong while trying to write' + error.data.msg;
      });
    }
    else {
      this.usersService.insert(this.formValues).then(response => {
        this.writeResult = response.status;
        this.uibModalInstance.close(this.writeResult);
      }).catch(err => {
        if(err.data.status === 'Duplicated') {
          this.writeResult = 'That user email was already used; try other';
        }
      });
    }
  }
}

angular.module(ModuleName).controller('UsersModal',
  [
    '$uibModalInstance',
    'AuthService',
    'UsersService',
    UsersModalController
  ]
);