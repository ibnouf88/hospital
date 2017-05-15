import Nav-linksModule from './nav-links';
import Nav-linksController from './nav-links.controller';
import Nav-linksComponent from './nav-links.component';
import Nav-linksTemplate from './nav-links.html';

describe('Nav-links', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Nav-linksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Nav-linksController();
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
      expect(Nav-linksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Nav-linksComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Nav-linksTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Nav-linksController);
    });
  });
});
