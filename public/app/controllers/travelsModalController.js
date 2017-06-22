class TravelsModalController {
  constructor($uibModalInstance, AuthService, TravelsService) {
    this.uibModalInstance = $uibModalInstance;
    this.authService = AuthService;
    this.travelsService = TravelsService;

    this.travelData = TravelsService.getUpdatingTravelData();
    this.writeResult = 'Please, enter travel data';

    if(this.travelData) {
      this.isUpdate = true;
    }
    else {
      this.travelData = false;
    }
    this.operation = 'Create Travel'; 
    this.formValues = {
      destination: '',
      comment: '',
      start: new Date(),
      end: new Date()
    };

    if(this.isUpdate) {
      this.operation = 'Update Travel';
      this.formValues.destination = this.travelData.destination;
      this.formValues.comment = this.travelData.comment;
      this.formValues.start = new Date(this.travelData.start);
      this.formValues.end = new Date(this.travelData.end);
      this.formValues._id = this.travelData._id;
    }
  }

  cancel() {
    this.uibModalInstance.dismiss('cancel');
  }

  ok() {
    if(!(this.formValues.start && this.formValues.comment && this.formValues.destination && this.formValues.end))
      this.writeResult = 'All fields are required';
    else if(this.formValues.start > this.formValues.end) {
      this.writeResult = 'The Starting date should be before Ending date';
    }
    else {
      this.writeResult = 'Data is ok - travel should be upserted now';
      if(this.isUpdate) {
        this.travelsService.update(this.formValues).then(response => {
          this.writeResult = response.status;
          this.uibModalInstance.close(this.writeResult);
        }).catch(err => {
          this.writeResult = 'Something went wrong while updating the travel: ' + err.data.msg;
        });
      }
      else {
        this.travelsService.insert(this.formValues).then(response => {
          this.writeResult = response.status;
          this.uibModalInstance.close(this.writeResult);
        }).catch(err => {
          this.writeResult = 'Something went wrong while creating the travel: ' + err.data.status;
        });
      }
    }
  }
}

angular.module(ModuleName).controller('TravelsModal',
  [
    '$uibModalInstance',
    'AuthService',
    'TravelsService',
    TravelsModalController
  ]
);