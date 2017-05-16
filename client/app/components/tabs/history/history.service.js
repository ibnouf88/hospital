
import * as historyConstants from 'constants/history.constants';

class HistoryService {

  /**
   * Get clinical history for patient
   * 
   * @param {any} patient
   * @returns
   * 
   * @memberOf HistoryService
   */
  getClinicalHistory(patient) {

    return this
      .FirebaseService
      .getFromCollection(this.colName, {
        method: 'equalTo', 
        value: patient.$id, 
        key: 'patient_id'
      });

  }

  constructor(PatientsService, FirebaseService) {
    
    'ngInject';

    this.colName = historyConstants.HISTORY_COLLECTION_NAME;

    /* SERVICES */
    this.FirebaseService = FirebaseService;
    this.PatientsService = PatientsService;

  }

}

export default HistoryService;
