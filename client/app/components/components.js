import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Patient from './patient/patient';
import Patients from './patients/patients';
import NavLinks from './nav-links/nav-links';
import HistoryTab from './tabs/history/history';

let componentModule = angular.module('app.components', [
  Home,
  HistoryTab,
  About,
  NavLinks,
  Patient,
  Patients
])

.name;

export default componentModule;
