var jsonData = require('../../nightwatch.json');
var locators={
    logo:'a img',
    subjectButton:'li a[href="#/website-courses/grid"]',
    candidateButton:'a[ng-show="loginShow"]',
    loginButton:'div a[href="#/login"]'
};
function Header(browser) {
    this.browser = browser;
}
Header.prototype= {
    checkForElements: function(){
        this.browser.waitForElementVisible(locators['logo'],10000);
        this.browser.waitForElementVisible(locators['subjectButton'],10000);
        this.browser.waitForElementVisible(locators['candidateButton'],10000);
        this.browser.waitForElementVisible(locators['loginButton'],10000);
    }

};
module.exports=Header;