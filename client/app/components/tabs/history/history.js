import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HistoryComponent from './history.component';
import HistoryService from './history.service';

export default angular.module('history', [
  uiRouter
])

.component('history', HistoryComponent)

.service('HistoryService', HistoryService)

.name;