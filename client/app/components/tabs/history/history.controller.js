
class HistoryController {

  /**
   * TODO:
   * move FirebaseService into HisotyrService
   * use constants
   * 
   */


  constructor(FirebaseService) {

    'ngInject';

    this.FirebaseService = FirebaseService;
    this.name = 'history';
  
  }

  /**
   * Set clicked person as selected person 
   * and get clinical history
   * 
   * @memberOf HistoryController
   */
  selectPatient() {

    this.selectedPatient = _.head(this.patient);
    this.getClinicalHistory(this.selectedPatient);

  }

  /**
   * Get clinical history for specifed person
   * 
   * @param {integer} personId
   * 
   * @memberOf HistoryController
   */
  getClinicalHistory(patient) {

    this.clinicalHistory = this
      .FirebaseService
      .getFromCollection('clinical_history', {method: 'equalTo', value: patient.$id, key: 'patient_id'});

  }

  $onInit() {

    this.patients = this
      .FirebaseService
      .getFromCollection('patients');

  }

}

export default HistoryController;
