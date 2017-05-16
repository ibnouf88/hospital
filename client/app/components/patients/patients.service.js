
import * as patientConstants from 'constants/patient.constants';

class PatientService {

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

export default PatientService;
