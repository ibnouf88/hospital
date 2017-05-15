import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navLinksComponent from './nav-links.component';

let navLinksModule = angular.module('nav-links', [
  uiRouter
])

.component('navLinks', navLinksComponent)

.name;

export default navLinksModule;
