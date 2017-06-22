class SignUpController {
  constructor($location, SignUpService) {
    this.statusMsg = 'Please, enter user and password';
    this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    this.location = $location;
    this.signUpService = SignUpService ;
  }

  signUpClick(us) {
    if(us.email && us.pass) {
      this.signUpService.signUp(us.email, us.pass).then(
        response => {
          this.statusMsg = response.successMsg;
          this.location.path('/login');
        }).catch(error => {
          if(error.status === 409) {
            this.statusMsg = error.data.status;
          }
          else {
            this.statusMsg = error.data.msg;
          }
        }
      );
    }
    else {
      this.statusMsg = 'Looks like your credentials are wrong!';
    }
  }
}

angular.module(ModuleName).controller('SignUp', [
    '$location',
    'SignUpService',
    SignUpController
  ]
);