module.exports = (function(settings, globals) {
    settings.test_runner.options.reporterOptions.reportDir = 'reports/' + globals.localTimeStamp;
    settings.test_runner.options.reporterOptions.reportTitle = "Nirvana E2E Test Raporu :" + new Date(globals.localTimeStamp);
    return settings;
})(require('./nightwatch.json'), require('./globals.js'))