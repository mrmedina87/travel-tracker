var SignUpResource = function($resource) {
  return $resource(
    '/api/signup',
    {},
    {
      executeRpc: {
        method: 'POST',
        isArray: false
      }
    }
  );
};

angular.module(ModuleName).factory('SignUpResource',
  [
    '$resource',
    SignUpResource
  ]
); 