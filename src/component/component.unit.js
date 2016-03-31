'use strict';

const component = require('./component');

describe('testComponentCtrl', () => {
  let scope = null;

  beforeEach(angular.mock.module(component.name));
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
  }));

  it('should test', () => {
    expect(true).to.be.true;
  });
});
