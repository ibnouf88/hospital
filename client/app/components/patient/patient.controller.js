
// import * as patientConstants from 'constants/patient.constants';

class PatientController {

  /**
   * Save data to remote db
   * 
   * 
   * @memberOf PatientController
   */
  submit() {

    this
      .patientService
      .savePatient(this.patient);

  }

  getTitle(id) {

    const action = (id) ? 'Editar' : 'Agregar';
    return `${action} Paciente`;

  }

  $onInit() {
   
    this.name = 'patient';

    this
      .patientService
      .getPatient(this.patientId)
      .then((patient) => {

        this.patient = patient;

      });
   
  }

  constructor($stateParams, PatientService) {
    
    'ngInject';

    this.patientId = $stateParams.id;
    this.patientService = PatientService;

  }

}

export default PatientController;
