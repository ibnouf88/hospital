import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PatientsComponent from './patients.component';
import PatientsService  from './patients.service';

let patientsModule = angular.module('patients', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('patients', {
      url: '/patients',
      component: 'patients'
    });
    
})

.component('patients', PatientsComponent)

.service('PatientsService', PatientsService)

.name;

export default patientsModule;
