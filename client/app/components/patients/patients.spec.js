import PatientsModule from './patients';
import PatientsController from './patients.controller';
import PatientsComponent from './patients.component';
import PatientsTemplate from './patients.html';

describe('Patients', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PatientsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PatientsController();
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
      expect(PatientsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PatientsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PatientsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PatientsController);
    });
  });
});
