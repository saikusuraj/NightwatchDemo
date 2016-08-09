var locators={
    logo:'a img',
    subjectButton:'li a[href="#/website-courses/grid"]',
    candidateButton:'a[ng-show="loginShow"]',
    loginButton:'div a[href="#/login"]',
    browseSubjectsButton:'a.btn.btn-lg.btn-primary'
};
function Homepage(browser) {
    this.browser = browser;
}
Homepage.prototype= {
    clickOnLogo: function() {
        this.browser.waitForElementVisible(locators['logo'],10000);
        this.browser.click(locators['logo']);
    },
    clickOnSubject:function(){
        this.browser.click(locators['subjectButton']);
        this.browser.pause(2000);
    },
    clickOnCandidate:function() {
        this.browser.click(locators['candidateButton']);
        this.browser.pause(2000);
    },
    clickOnBrowseSubject:function(){
        this.browser.waitForElementVisible(locators['browseSubjectsButton'],10000);
        this.browser.click(locators['browseSubjectsButton']);
        this.browser.pause(2000);
    }
};

module.exports=Homepage;