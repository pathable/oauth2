Package.describe({
  summary: "Common code for OAuth2-based login services",
  version: '1.3.1',
  name: 'pathable:oauth2',
  git: 'https://github.com/pathable/oauth2',
});

Package.onUse(api => {
  api.versionsFrom('1.11');

  api.use([
    'random'
  ], 'server');

  api.use('pathable:oauth@1.3.1', ['client', 'server'])

  api.use(['service-configuration', 'ecmascript'], ['client', 'server']);

  api.addFiles('oauth2_server.js', 'server');
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'random',
    'oauth2',
    'oauth',
    'service-configuration',
    'oauth-encryption',
    'ecmascript',
  ], 'server');

  api.addFiles("oauth2_tests.js", 'server');
});
