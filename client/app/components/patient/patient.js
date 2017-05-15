import angular from 'angular';
import uiRouter from 'angular-ui-router';
import patientComponent from './patient.component';
import PatientService from './patient.service';

let patientModule = angular.module('patient', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('patientAdd', {
      url: '/patient/add',
      component: 'patient'
    })
    .state('patientEdit', {
      url: '/patient/edit/:id',
      component: 'patient',
      params: {
        id: null
      }
    });
    
})

.component('patient', patientComponent)

.service('PatientService', PatientService)

.name;

export default patientModule;
