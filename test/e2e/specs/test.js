// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.veh-notify', 1)
      .pause(2501)
      .assert.elementPresent('#vue-simple-notify')
      .assert.elementCount('.veh-notify', 5)
      .assert.elementCount('.veh-type', 5)
      .assert.elementCount('.veh-message', 5)
      .assert.elementCount('.veh-dismissable', 3)
      .useCss()
      .assert.containsText('#vue-simple-notify > div > div:nth-child(1) > div > p > span.veh-type', 'Error')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(1) > div > p > span.veh-message', 'example of error message')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(2) > div > p > span.veh-type', 'Success')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(2) > div > p > span.veh-message', 'example of success message')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(3) > div > p > span.veh-type', 'Warning')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(3) > div > p > span.veh-message', 'example of warning message')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(4) > div > p > span.veh-type', 'Info')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(4) > div > p > span.veh-message', 'example of info message')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(5) > div > p > span.veh-type', 'Custom')
      .assert.containsText('#vue-simple-notify > div > div:nth-child(5) > div > p > span.veh-message', 'example of custom message')
      .click('.veh-dismissable')
      .pause(1000)
      .assert.elementCount('.veh-notify', 4)
      .click('.veh-dismissable')
      .pause(1000)
      .assert.elementCount('.veh-notify', 3)
      .click('.veh-dismissable')
      .pause(1000)
      .assert.elementCount('.veh-notify', 2)
      .end()
  }
}
