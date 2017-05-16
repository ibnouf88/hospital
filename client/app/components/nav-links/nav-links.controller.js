
class NavLinksController {

  setActiveTab(tab) {

    this.tab = tab;

  }

  tabIsActive(tab) {

    return this.tab === tab;

  }

  constructor() {
    
    this.name = 'nav-links';
  
  }

}

export default NavLinksController;
