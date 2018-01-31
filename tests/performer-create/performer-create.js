module.exports = {
    '@disable': false,
    '@tags': ['performer-create'],
    'Varlık Yönetimi Tıklama': function(browser) {

        browser
            .waitForElementVisible('body', 1000)
            .useCss()
    }
}