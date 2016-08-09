var locators={
    signupButton:'a[ui-sref="sign-up"]',
    emailIDField:'#emailAddress',
    passwordField:'#ePassword',
    confirmPasswordField:'#mPassword',
    termsCheckBox:'#terms',
    employeeCheckBox:'#candidate',
    createAccount:'input[type="submit"]',
    referenceCode:'#emailActiveReference',
    referenceCodeSubmit:'div a[ng-click="emailActiveReferenceSubmit()"]',
    logoutButton:'a[ng-click="logout()"]'
};
function SignupPage(browser) {
    this.browser = browser;
}
SignupPage.prototype={
    clickOnLogout:function(){
        this.browser.waitForElementVisible(locators['logoutButton'],10000);
        this.browser.click(locators['logoutButton']);
    },
    clickOnSignup:function(){
        this.browser.waitForElementVisible(locators['signupButton'],10000);
        this.browser.click(locators['signupButton']);
    },
    giveDetails:function(){
        this.browser.waitForElementVisible(locators['emailIDField'],10000);
        this.browser.setValue('input[id=emailAddress]', 'p.venugopalarao222@gmail.com');
        this.browser.waitForElementVisible(locators['passwordField'],10000);
        this.browser.setValue('input[id=ePassword]', 'Training@');
        this.browser.waitForElementVisible(locators['confirmPasswordField'],10000);
        this.browser.setValue('input[id=mPassword]', 'Training@');

    },
    clickOnCheckBoxes:function(){
        this.browser.click(locators['employeeCheckBox']);
        this.browser.click(locators['termsCheckBox']);
    },

    submit:function(){
        this.browser.waitForElementVisible(locators['createAccount'],10000);
        this.browser.click(locators['createAccount']);
    }

};
module.exports=SignupPage;