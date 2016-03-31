'use strict';

require('./component.css');
const template = require('./component.html');

module.exports = angular.module('component.component', [
])

.controller('testComponentCtrl', [
  '$scope',
  function ($scope) {
    const ctrl = this;

    // TODO: do some shit

    return ctrl;
  }
])

.component('testComponent', {
  controller: 'testComponentCtrl',
  template: template
});
