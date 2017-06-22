var UsersResource = function($resource, $window) {
  var authHeaderElement = {
    'Authorization': $window.localStorage.token
  };
  return $resource(
    '/api/users/:param',
    {},
    {
      list: {
        method: 'GET',
        isArray: false,
        headers: authHeaderElement
      },
      delete: {
        method: 'DELETE',
        isArray: false,
        headers: authHeaderElement
      },
      insert: {
        method: 'POST',
        isArray: false,
        headers: authHeaderElement
      },
      update: {
        method: 'PUT',
        isArray: false,
        headers: authHeaderElement
      }
    }
  );
};

angular.module(ModuleName).factory('UsersResource',
  [
    '$resource',
    '$window',
    UsersResource
  ]
); 