var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    debug: {
        saveNightwatch: './debugNightwatchOutput.txt'
    },
    openBrowser: true,
    reportsDirectory: __dirname + '/reports',
    relativeScreenshots: false,
    uniqueFilename: false

});
module.exports = {
    reporter: reporter.fn,
    localTimeStamp: Date.now(),
    username: 'mobilet',
    password: 'nirvana',
    apiKey: '11',
    terminalId: '1',
    channelCode: 'Web',
    firmCode: 'MBT',
    urls: {
        test: 'https://backstage-test.mobilet.com',
        dev: 'https://backstage-stage.mobilet.com'
    }
};