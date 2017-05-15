/** COMPONENTS **/
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Services from './services/services';
import Components from './components/components';
import AppComponent from './app.component';

/** CSS **/
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Services
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

  })
  .component('app', AppComponent);
