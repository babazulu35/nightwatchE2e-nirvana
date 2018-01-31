module.exports = {
    '@disabled': false,
    '@tags': ['menu'],
    'Is Menu List Loaded': function(browser) {
        browser
            .waitForElementVisible('app-main-menu', 1000)
            .saveScreenshot('sshot/menuelement/menu-elements-loaded.png')

    }
}