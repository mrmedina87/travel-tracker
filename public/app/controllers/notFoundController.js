class NotFoundController {
  constructor() {
    this.messageHeader = 'Uh-oh, that URL is not cool!';
    this.message = 'Error 404: Not found';
  }
}

angular.module(ModuleName).controller('NotFound', 
  [
    '$location',
    NotFoundController
  ]
);