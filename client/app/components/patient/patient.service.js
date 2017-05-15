
import * as patientConstants from 'constants/patient.constants';

export default class PatientService {

  savePatient(patient) {
    
    // let action = (patient.id) ? 
    //   this.FirebaseService.saveToCollection :
    //   this.FirebaseService.addToCollection;

    // return action(this.patientCol, patient);

    let action;
    if (patient.id) {
      action = this.FirebaseService.saveToCollection(this.patientCol, patient);
    } else {
      action = this.FirebaseService.addToCollection(this.patientCol, patient);
    }

    action
      .then(() => {
        console.log('Saved succesfully');
      })
      .catch(() => {
        console.log('Error');
      });

  }

  getPatient(id) {
    
    let patient;
    
    if (id) {

      patient = this
        .FirebaseService
        .getById(this.patientCol, id);

    } else {
        
      patient = this.$q.when({
        active: true
      });

    }

    return patient;
    
  }

  constructor($q, FirebaseService) {
    
    'ngInject';

    this.$q = $q;
    this.patientCol = patientConstants.PATIENTS_COLLECTION_NAME;
    this.FirebaseService = FirebaseService;

  }

}