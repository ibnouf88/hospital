

// import 'firebase';
import 'angularfire';

import FirebaseService from './firebase/firebase.service';

/** THIRD PARTY **/
import firebase from 'firebase';

/** CONFIG **/
import FirebaseConfig from './firebase/firebase.config';

const services = angular
  
  .module('services', ['firebase'])
  
  .config(() => {

    // console.log('firebase ', firebase);
    const FBConfig = new FirebaseConfig().getConfig();

    firebase.initializeApp(FBConfig);
    
    firebase
      .auth()
      .signInWithEmailAndPassword(FBConfig.email, FBConfig.password)
      .catch((error) => {
        
        console.log('error ', error);

      });

  })

  .service('FirebaseService', FirebaseService)
  
  .name;

export default services;