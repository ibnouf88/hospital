import angular from 'angular';
import uiRouter from 'angular-ui-router';
import historyComponent from './history.component';

export default angular.module('history', [
  uiRouter
])
.component('history', historyComponent)

.name;