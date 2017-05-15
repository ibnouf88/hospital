import template from './patient.html';
import controller from './patient.controller';
import './patient.scss';

let patientComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default patientComponent;
