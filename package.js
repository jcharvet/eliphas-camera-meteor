Package.describe({
  name: 'eliphas:camera',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Photos with one function call on desktop and mobile for css.",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jcharvet/eliphas-camera-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-camera": "2.1.1"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.versionsFrom("1.4.1.1");
  api.use("isobuild:cordova@5.2.0");

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.css", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('eliphas:camera');
  api.mainModule('camera-tests.js');
});
