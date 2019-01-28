const HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
      },
 
    //jrunner.projectBaseDir = '';
    //jrunner.execute(['**/*_spec.js']);

      // multiCapabilities: [{
      //   'browserName': 'chrome'
      // }, {
      //   'browserName': 'firefox'
      // }],
      framework: 'jasmine',  
    specs: ['D:\\Testing\\E2Etesting\\ConvertedJSFiles\\Tests\\AddSubscriberValidation.js'],
    onPrepare: function () {   
        browser.ignoreSynchronization = true
        browser.driver.manage().window().maximize()
         jasmine.getEnv().addReporter(new HtmlReporter({
           ignoreSkippedSpecs: true,
             baseDirectory: './E2Etesting/Reports'
         }).getJasmine2Reporter());
       },
      
    //   suite: {
    //     AddSubscriber: 'AddSubscriber_Validation.js',
    //     AddClient: 'AddClient_Validation.js',
    //     AddViewpayments: 'AddViewPayments_Validation.js',
    //     OtherAdjustments: 'OtherAdjustment_Validation.js',
    //     all: '*_Validation.js'
    //   },   

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
      },
      allScriptsInterval: 300000,
      getPageInterval: 15000
    };
    