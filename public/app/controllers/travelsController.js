class TravelsController {
  constructor($location, AuthService, TravelsService, $uibModal) {
    this.location = $location;
    this.authService = AuthService;
    this.travelsService = TravelsService;
    this.uibModal = $uibModal;

    this.travelsList = [];
    this.title = 'Your travels';

    this.startFilter = '';
    this.endFilter = '';
    this.filterStatus = 'Filter your travels by date';

    if(!this.authService.isLoggedin() || this.authService.isAdmin()) {
      this.location.path('login');
    }

    this.updateTravelsList();
  }

  daysCount(startDate) {
    var start = (new Date(startDate)).getTime();
    var today = (new Date()).getTime();
    if( start > today ) {
      return (parseInt((start - today) / 86400000)).toString();
    }
    else {
      return false;
    }
  }

  updateTravelsList() {
    this.travelsService.list().then(response => {
      this.travelsList = response.travelsList;
    }).catch(() => {
      this.filterStatus = 'Something went wrong while trying to retrieve travels';
    });
  }

  filterList(start,end) {
    this.travelsService.query(start, end).then(response => {
      this.travelsList = response.travelsList;
    }).catch(() => {
      this.filterStatus = 'Something went wrong while trying to filter travels by date';
    });
  }

  delete(target) {
    this.travelsService.delete(target).then(response => {
      this.updateTravelsList();
    }).catch(() => {
      this.filterStatus = 'Something went wrong while trying to delete travels';
    });    
  }

  logoutClick() {
    this.authService.logout();
    this.location.path('login');
  }

  deleteFilters() {
    this.startFilter = '';
    this.endFilter = '';
    this.updateTravelsList();
  }

  nextMonth() {
    var current = (new Date()).getMonth();
    var next = (current === 11)?0:current + 1;
    this.travelsService.query("nextmonth", next).then(response => {
      this.travelsList = response.travelsList;
    }).catch(() => {
      this.filterStatus = 'Something went wrong while trying to retrieve next month travels';
    });
  }

  openModal(trvl) {
    if(trvl) {
      this.travelsService.setUpdatingTravelData(trvl);
    }
    var modalInstance = this.uibModal.open({
      animation: true,
      templateUrl: '/app/views/travelsModal.html',
      controller: 'TravelsModal',
      controllerAs: 'modal',
      size: 'small'
    });

    modalInstance.result.then(response => {
      this.travelsService.setUpdatingTravelData(null);
      this.updateTravelsList();
    }).catch(canceled => {
      this.travelsService.setUpdatingTravelData(null);
    });
  }

  filter() {
    if(this.startFilter && this.endFilter) {
      if(this.startFilter <= this.endFilter) {
        this.filterList(this.startFilter.getTime(), this.endFilter.getTime());
      }
      else {
        this.filterStatus = 'Start Date has to be before than end Date';
      }
    }
    else {
      if(this.endFilter) {
        var startfilter = new Date(1900, 0, 1);
        this.filterList(startfilter.getTime(), this.endFilter.getTime());
      }
      else {
        this.filterList(this.startFilter.getTime(), "theend");
      }
    }
  }
}

angular.module(ModuleName).controller('Travels', 
  [
    '$location',
    'AuthService',
    'TravelsService',
    '$uibModal',
    TravelsController
  ]
);