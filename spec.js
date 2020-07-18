
var angularHomepage = require('./AngularHomepage');
describe('angularjs homepage', function() {

  it('should greet the named user', async function() {
    await angularHomepage.get();

    await browser.sleep(1000)
    await angularHomepage.setName('Julie');
    await browser.sleep(1000)

    expect(await angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });

});