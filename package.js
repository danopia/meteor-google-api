Package.describe({
  name: 'danopia:google-api',
  summary: "A Meteor library to interact with Google's API",
  version: '1.1.1',
  git: 'https://github.com/danopia/meteor-google-api'
});

Package.on_use(function (api, where) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
    api.use(['http', 'livedata', 'google-oauth@1.2.0', 'mrt:q@1.0.1', 'accounts-base', 'underscore']);
  } else {
    api.use(['http', 'livedata', 'google-oauth@1.2.0', 'q', 'accounts-base', 'underscore']);
  }

  api.add_files(['utils.js', 'google-api-async.js'], ['client', 'server']);
  api.add_files(['google-api-methods.js'], ['server']);

  api.export('GoogleApi', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use([
    'danopia:google-api',
    'tinytest',
    'http',
    'accounts-base',
    'service-configuration',
    'underscore']);

  api.add_files('google-api-tests.js', ['client', 'server']);
});
