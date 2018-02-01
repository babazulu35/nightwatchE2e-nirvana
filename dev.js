var HtmlReporter = require('nightwatch-html-reporter')
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'compact',
    relativeScreenshots: true,
    uniqueFilename: true,
    reportsDirectory: __dirname + '/reports'
})

module.exports = {
    username: 'mobilet',
    password: 'nirvana',
    apiKey: '11',
    terminalId: '1',
    channelCode: 'Web',
    firmCode: 'MBT',
    urls: {
        test: 'https://backstage-stage.mobilet.com',
        dev: ''
    },
    reporter: reporter.fn
}