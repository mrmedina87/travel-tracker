'use strict';

var TravelsController = function($location, AuthService, TravelsService, $uibModal) {
  var _this = this;
  _this.travelsList = [];
  _this.title = 'Your travels';

  _this.startFilter = '';
  _this.endFilter = '';
  _this.filterStatus = 'Filter your travels by date';

  if(!AuthService.isLoggedin() || AuthService.isAdmin()) {
    alert("You should login to access to the travels view");
    $location.path('login');
  }

  _this.daysCount = function(startDate) {
    var start = (new Date(startDate)).getTime();
    var today = (new Date()).getTime();
    if( start > today ) {
      return (parseInt((start - today) / 86400000)).toString();
    }
    else
      return false;
  };

  var updateTravelsList = function() {
    TravelsService.list().then(
      function(response) {
        _this.travelsList = response.travelsList;
      },
      function(error) {
        console.log(error);
      }
    );
  };

  var filterList = function(start,end) {
    TravelsService.query(start, end).then(
      function(response) {
        _this.travelsList = response.travelsList;
      },
      function(error) {
        console.log(error);
      }
    );
  };

  _this.delete = function(target) {
    TravelsService.delete(target).then(
      function(response) {
        updateTravelsList();
      },
      function(error) {
        console.log(error);
      }
    );    
  };

  this.logoutClick = function() {
    AuthService.logout();
    $location.path('login');
  };

  this.deleteFilters = function() {
    _this.startFilter = '';
    _this.endFilter = '';
    updateTravelsList();
  };

  this.nextMonth = function() {
    var current = (new Date()).getMonth();
    var next = (current === 11)?0:current + 1;
    TravelsService.query("nextmonth", next).then(
      function(response) {
        _this.travelsList = response.travelsList;
      },
      function(error) {
        console.log(error);
      }
    );
  };

  _this.openModal = function(trvl) {
    if(trvl) {
      TravelsService.setUpdatingTravelData(trvl);
    }
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/app/views/travelsModal.html',
      controller: 'TravelsModalController',
      controllerAs: 'modal',
      size: 'small'
    });

    modalInstance.result.then(
      function(response) {
        TravelsService.setUpdatingTravelData(null);
        updateTravelsList();
      },
      function(canceled) {
        TravelsService.setUpdatingTravelData(null);
      }
    );
  };

  _this.filter = function() {
    if(_this.startFilter && _this.endFilter) {
      if(_this.startFilter <= _this.endFilter) {
        filterList(_this.startFilter.getTime(),_this.endFilter.getTime());
      }
      else {
        _this.filterStatus = 'Start Date has to be before than end Date';
      }
    }
    else {
      if(_this.endFilter) {
        var startfilter = new Date(1900,0,1);
        filterList(startfilter.getTime(),_this.endFilter.getTime());
      }
      else {
        filterList(_this.startFilter.getTime(),"theend");
      }
    }
  };

  updateTravelsList();
};

angular.module(ModuleName).controller('TravelsController', 
  [
    '$location',
    'AuthService',
    'TravelsService',
    '$uibModal',
    TravelsController
  ]
);