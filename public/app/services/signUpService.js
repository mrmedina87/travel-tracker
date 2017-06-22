var SignUpService = function(SignUpResource, $window) {

  this.signUp = function(usr, pswrd) {
    var rpcConfig = {
      name: usr,
      password: pswrd
    };
    return SignUpResource.executeRpc(rpcConfig).$promise;
  };
};

angular.module(ModuleName).service('SignUpService', 
  [
    'SignUpResource', 
    '$window',
    SignUpService
  ]
);