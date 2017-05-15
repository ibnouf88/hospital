import angular from 'angular';
import uiRouter from 'angular-ui-router';
import patientsComponent from './patients.component';

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

.component('patients', patientsComponent)

.name;

export default patientsModule;
