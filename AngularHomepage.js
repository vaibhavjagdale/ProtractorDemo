var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
  
    this.get = async function() {
      await browser.get('http://www.angularjs.org');
    };
  
    this.setName = async function(name) {
      await nameInput.sendKeys(name);
    };
  
    this.getGreetingText = function() {
      return greeting.getText();
    };
  
    // Not async, returns the element
    this.getGreeting = function() {
      return greeting;
    };
  };
  module.exports = new AngularHomepage();