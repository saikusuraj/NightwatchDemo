var LoginPage=require('./pages/Loginpage.js');
var Header=require('./pages/Header.js');
var Footer=require('./pages/Footer.js');
var Homepage=require('./pages/Homepage.js');
var SignupPage=require('./pages/SignupPage.js');
var MyProfile=require('./pages/MyProfile.js');

var buttons;
var login;
var header;
var footer;
var signup;
var profile;
module.exports = {
    'TalentScreen Automation': function (browser) {

       browser.windowMaximize();
       browser.url(browser.launch_url);
     //testing the header
        header=new Header(browser);
        header.checkForElements();
        //testing Footer
        footer=new Footer(browser);
        footer.checkFooterVisibility();
        //testing the buttons
        buttons=new Homepage(browser);
        buttons.clickOnSubject();
        buttons.clickOnCandidate();
        buttons.clickOnLogo();
        buttons.clickOnBrowseSubject();
        buttons.clickOnLogo();
        login = new LoginPage(browser);
        login.checkLogin();
        //testing the signup page
        signup=new SignupPage(browser);
        signup.clickOnSignup();
        signup.giveDetails();
        signup.clickOnCheckBoxes();
        signup.submit();
        //to check login page
        buttons.clickOnLogo();
        login = new LoginPage(browser);
        login.checkLogin();
        login.setCredentials();
        login.submit();
        //testing the MyProfile
        profile=new MyProfile(browser);
        profile.clickOnProfile();
        profile.checkForElements();
        browser.end();
    }
};