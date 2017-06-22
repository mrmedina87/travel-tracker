var FactoryTravelResources = function($resource, $window) {
  return function(token) {
    return $resource(
      '/api/travels/:param/:end ',
      {},
      {
        list: {
          method: 'GET',
          isArray: false,
          headers: {
            'Authorization': token
          }
        },
        delete: {
          method: 'DELETE',
          isArray: false,
          headers: {
            'Authorization': token
          }
        },
        insert: {
          method: 'POST',
          isArray: false,
          headers: {
            'Authorization': token
          }
        },
        update: {
          method: 'PUT',
          isArray: false,
          headers: {
            'Authorization': token
          }
        }
      }
    );
  };
};

angular.module(ModuleName).factory('FactoryTravelResources',
  [
    '$resource',
    '$window',
    FactoryTravelResources
  ]
); 