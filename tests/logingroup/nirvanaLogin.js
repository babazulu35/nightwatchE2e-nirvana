const addContext = require('mochawesome/addContext');
describe('Nirvana Login Testi', function() {
    before(function(client, done) {

        done();
    });

    after(function(client, done) {
        client.end(function() {
            done();
        });
    });
    it('Sayfa Yüklenme Testi', function(browser) {

        browser.url(browser.globals.urls.test);
        browser.waitForElementPresent('app-login', 1000);
        browser.saveScreenshot('sshot/' + browser.globals.localTimeStamp + '/login.jpg');
        addContext(this, '../../sshot/' + browser.globals.localTimeStamp + '/login.jpg');


    });
    it('Boş Form Gönderimi Hatası', function(browser) {
        browser.click('button')
        browser.perform((client, done) => {
            client
                .useCss()
                .waitForElementVisible('.alert', 1000)
                .saveScreenshot('sshot/' + browser.globals.localTimeStamp + '/form-gonderim-hatasi.jpg');

            done();
        })
        addContext(this, '../../sshot/' + browser.globals.localTimeStamp + '/form-gonderim-hatasi.jpg');
    });
    it('Giriş Verilerinin Gönderilmesi ve Girş Başarılı', function(browser) {
        var data = browser.globals;
        browser
            .click('app-text-input input')
            .setValue('input[name=username]', data.username)
            .setValue('input[name=password]', data.password)
            .setValue('input[name=apiKey]', data.apiKey)
            .setValue('input[name=terminalId]', data.terminalId)
            .setValue('input[name=channelCode]', data.channelCode)
            .setValue('input[name=firmCode]', data.firmCode)
            .click('button')
            .pause(2000)
            .perform(function(client, done) {
                client
                    .waitForElementPresent('app-index', 1000)
                    .saveScreenshot('sshot/' + browser.globals.localTimeStamp + '/giris-basarili.jpg');

                done();
            })
        addContext(this, '../../sshot/' + browser.globals.localTimeStamp + '/giris-basarili.jpg');
        browser.pause(1000);
    });

});