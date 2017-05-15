import PatientModule from './patient';
import PatientController from './patient.controller';
import PatientComponent from './patient.component';
import PatientTemplate from './patient.html';

describe('Patient', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PatientModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PatientController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PatientTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PatientComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PatientTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PatientController);
    });
  });
});
