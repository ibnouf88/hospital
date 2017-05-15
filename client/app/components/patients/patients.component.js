import template from './patients.html';
import controller from './patients.controller';
import './patients.scss';

let patientsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default patientsComponent;
