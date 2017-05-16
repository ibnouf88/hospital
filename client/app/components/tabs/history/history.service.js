
import * as historyConstants from 'constants/history.constants';

export default class HistoryService {

  /**
   * 
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

  /**
   * 
   * 
   * @returns
   * 
   * @memberOf HistoryService
   */
  getAllHistories() {

    return this
      .PatientsService
      .getAllPatients();

  }

  constructor(PatientsService, FirebaseService) {
    
    'ngInject';

    this.colName = historyConstants.HISTORY_COLLECTION_NAME;

    /* SERVICES */
    this.FirebaseService = FirebaseService;
    this.PatientsService = PatientsService;

    // this
    //   .FirebaseService
    //   .addToCollection(this.colName, {
    //     patient_id: '-Kk8HrjdO0KV8q-fKRGh',
    //     date: '05/15/2017',
    //     professional: 'Nick Riviera',
    //     diagnosis: 'Dolor de garganta'
    //   });

  }

}