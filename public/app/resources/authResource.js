'use strict';

var AuthResource = function($resource) {
  return $resource(
    '/api/login',
    {},
    {
      executeRpc: {
        method: 'POST',
        isArray: false
      }
    }
  );
};

angular.module(ModuleName).factory('AuthResource',
  [
    '$resource',
    AuthResource
  ]
); 