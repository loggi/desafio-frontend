const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Add any other browser-specific globals that your code may be using.

// Remove any globals that Jest automatically sets up and conflicts with JSDOM.
delete global.requestAnimationFrame;
delete global.cancelAnimationFrame;

// Optionally, if you are using @testing-library/react, you can set up the testing-library's cleanup:
const { cleanup } = require('@testing-library/react');
afterEach(() => {
  cleanup();
});
