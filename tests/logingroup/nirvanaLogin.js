module.exports = {
    '@disabled': false,
    '@tags': ['login'],
    'Login Page': function(browser) {
        var data = browser.globals;
        browser
            .url(data.urls.test)
            .waitForElementPresent('app-login', 1000)
            .saveScreenshot('sshot/login/login.png')
    },
    'Get Error Message On Empty Submit': function(browser) {
        browser
            .click('button')
            .perform(function(client, done) {
                client
                    .useCss()
                    .waitForElementVisible('.alert', 1000)
                    .saveScreenshot('sshot/login/login-fail-empty-submit.png')
                done();
            })
    },
    'Set Login Data And Press ENTER Key ': function(browser) {
        var data = browser.globals;
        browser
            .click('app-text-input input')
            .setValue('input[name=username]', data.username)
            .pause(500)
            .setValue('input[name=password]', data.password)
            .pause(500)
            .setValue('input[name=apiKey]', data.apiKey)
            .pause(500)
            .setValue('input[name=terminalId]', data.terminalId)
            .pause(500)
            .setValue('input[name=channelCode]', data.channelCode)
            .pause(500)
            .setValue('input[name=firmCode]', data.firmCode)
            .click('button')
            .perform(function(client, done) {
                client
                    .waitForElementPresent('app-index', 1000)
                    .saveScreenshot('sshot/login/login-success.png')
                done();
            })

    }
};