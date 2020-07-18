exports.config = {
    
    capabilities: {
      'browserName': 'chrome'
  },

    specs: ['spec.js'],
    
    directConnect: true,
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000,
      includeStackTrace : true,
      isVerbose : true,
      print: function () {}
    }
  };