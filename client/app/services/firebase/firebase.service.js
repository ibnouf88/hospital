
import firebase from 'firebase';

export default class FirebaseService {

  /**
   * Get/Set reference from/to cache
   *
   * @param {string} child
   * @returns {promise}
   *
   * @memberOf FirebaseService
   */
  getRefFromCache(child) {

    let cached = _.get(this.refsCache, child);

    if (!cached) {

      cached = this.database.ref().child(child);
      _.set(this.refsCache, child, cached);

    }

    return cached;

  }

  /**
   * Get reference to specified location
   *
   * @param {string} child
   * @returns {promise}
   *
   * @memberOf FirebaseService
   */
  getChildRef(child) {

    return this.getRefFromCache(child);

  }

  /**
   * Add 'data' to 'child' collection
   *
   * @param {string} child
   * @param {string} data
   * @returns {promise}
   *
   * @memberOf FirebaseService
   */
  addToCollection(child, data) {

    return this
      .getFromCollection(child)
      .$add(data);

  }

  /**
   * Save 'data' to 'child' collection
   *
   * @param {string} child
   * @param {string} data
   * @returns {promise}
   *
   * @memberOf FirebaseService
   */
  saveToCollection(child, data) {

    let col = this
      .getFromCollection(child);

    return col
      .$loaded()
      .then(() => {

        let index = col
          .$indexFor(data.$id);

        // update data
        col[index] = data;
        
        // save to server
        return col.$save(index);

      });

  }

  /**
   * Get record by $id
   *
   * @param {string} child
   * @param {string} $id
   * @returns {promise}
   *
   * @memberOf FirebaseService
   */
  getById(child, $id) {

    return this
      .$firebaseArray(this.getChildRef(child))
      .$loaded()
      .then((list) => {

        return list.$getRecord($id);

      });

  }

  /**
   * Filter by specified key-value pair
   * OR return full collection
   *
   * @param {object} query
   * @returns {$firebaseArray}
   *
   * @memberOf FirebaseService
   */
  getFromCollection(child, query = {}) {

    // TODO: check if exists
    let ref = this.getChildRef(child);

    if (!_.isEmpty(query)) {

      ref = ref.orderByChild(query.key);

      if (query.method === 'equalTo') {
        ref = ref.equalTo(query.value);
      }

    }

    return this.$firebaseArray(ref);

  }

  constructor($firebaseArray) {

    'ngInject';

    this.$firebaseArray = $firebaseArray;

    this.database = firebase.database();

    this.refsCache = {};

  }

}