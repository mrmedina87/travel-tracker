class LoginController {
  constructor($location, AuthService) {
    this.statusMsg = 'Please, enter user and password';
    this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    this.location = $location;
    this.authService = AuthService;
    this.authService.isEmpty().then(resp => {
      if(resp.empty) {
        this.location.path('/signup');
      }
    }).catch(err => {
      this.statusMsg = 'Something went wrong. Try later or contact an admin person.';
    });
  }

  loginClick(us) {
    if(us.email && us.pass) {
      this.authService.login(us.email, us.pass).then(
        response => {
          this.statusMsg = response.successMsg;
          this.authService.setSessionData(us.email, response.token, response.admin);
          if(response.admin) {
            this. location.path('/users');  
          }
          else {
            this. location.path('/');
          }
        }).catch(error => {
          this.statusMsg = error.data.msg;
        }
      );
    }
    else {
      this.statusMsg = 'Looks like your credentials are wrong';
    }
  }
}

angular.module(ModuleName).controller('Login', [
    '$location',
    'AuthService',
    LoginController
  ]
);