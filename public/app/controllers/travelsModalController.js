'use strict';

var TravelsModalController = function($uibModalInstance, AuthService, TravelsService) {
  var _this = this;
  _this.travelData = TravelsService.getUpdatingTravelData();

  _this.writeResult = 'Please, enter travel data';

  if(_this.travelData) {
    _this.isUpdate = true;
  }
  else {
    _this.travelData = false;
  }
  _this.operation = 'Create Travel'; 
  _this.formValues = {
    destination: '',
    comment: '',
    start: new Date(),
    end: new Date()
  };
  
  if(_this.isUpdate) {
    _this.operation = 'Update Travel';
    _this.formValues.destination = _this.travelData.destination;
    _this.formValues.comment = _this.travelData.comment;
    _this.formValues.start = new Date(_this.travelData.start);
    _this.formValues.end = new Date(_this.travelData.end);
    _this.formValues._id = _this.travelData._id;
  }

  _this.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

  _this.ok = function() {
    
    if(!(_this.formValues.start && _this.formValues.comment && _this.formValues.destination && _this.formValues.end))
      _this.writeResult = 'All fields are required';
    else if(_this.formValues.start > _this.formValues.end) {
      _this.writeResult = 'The Starting date should be before Ending date';
    }
    else {
      _this.writeResult = 'Data is ok - travel should be upserted now';
      if(_this.isUpdate) {
        TravelsService.update(_this.formValues).then(
          function(response) {
            _this.writeResult = response.status;
            $uibModalInstance.close(_this.writeResult);
          },
          function(err){
            console.log(error.data.msg);
          }
        );
      }
      else {
        TravelsService.insert(_this.formValues).then(
          function(response) {
            _this.writeResult = response.status;
            $uibModalInstance.close(_this.writeResult);
          },
          function(err){
            _this.writeResult = 'Something went wrong while creating the travel: ' + err.data.status;
            
          }
        );
      }
    }
    
  };
  
};

angular.module(ModuleName).controller('TravelsModalController',
  [
    '$uibModalInstance',
    'AuthService',
    'TravelsService',
    TravelsModalController
  ]
);