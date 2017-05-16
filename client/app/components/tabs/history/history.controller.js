
class HistoryController {

  constructor(PatientService, PatientsService, HistoryService) {

    'ngInject';

    this.name = 'history';

    this.PatientsService = PatientsService;
    this.PatientService = PatientService;
    this.HistoryService = HistoryService;
  
  }

  /**
   * Set clicked person as selected person 
   * and get clinical history
   * 
   * @memberOf HistoryController
   */
  selectPatient(patient) {

    this.selectedPatient = _.head(patient);
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
      .HistoryService
      .getClinicalHistory(patient);

  }

  getPatientFullName(patient) {

    return this
      .PatientService
      .getPatientFullName(patient); 

  }

  $onInit() {

    this.patients = this
      .PatientsService
      .getAllPatients();

  }

}

export default HistoryController;
