/* eslint-disable no-var */

require('angular');
require('angular-mocks');

var __karmaWebpackManifest__ = [];

var testsContext = require.context('../component', true, /unit$/);

function inManifest(path) {
  return __karmaWebpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest);

// run all tests if we didn't find any changes
if (!runnable.length) {
  runnable = testsContext.keys();
}

runnable.forEach(testsContext);
