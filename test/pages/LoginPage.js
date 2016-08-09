var locators={
    loginButton:'div a[href="#/login"]',
    userNameField:'div input[id="username"]',
    passwordField:'div input[id="password"]',
    submitButton:'.btn.btn-primary'
};
function LoginPage(browser) {
    this.browser = browser;
}
LoginPage.prototype={
    checkLogin:function(){
        this.browser.waitForElementVisible(locators['loginButton'],10000);
        this.browser.click(locators['loginButton']);
    },
    setCredentials:function(){
        this.browser.waitForElementVisible(locators['userNameField'],10000);
        this.browser.setValue('userNameField', 'paaaa@gmail.com');
        this.browser.setValue('passwordField', 'Training@');
        this.browser.pause(2000);
    },
    submit:function(){
        this.browser.waitForElementVisible(locators['submitButton'],10000);
        this.browser.click(locators['submitButton']);
    }

};
module.exports=LoginPage;
