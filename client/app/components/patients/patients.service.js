
import * as patientConstants from 'constants/patient.constants';

export default class PatientService {

  getAllPatients() {

    return this
      .FirebaseService
      .getFromCollection(this.colName);

  }

  constructor($q, FirebaseService) {
    
    'ngInject';

    this.colName = patientConstants.PATIENTS_COLLECTION_NAME;
    this.FirebaseService = FirebaseService;

  }

}