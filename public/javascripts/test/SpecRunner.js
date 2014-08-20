require.config({
    baseUrl: '/javascripts/',
    paths: {
        'jquery' : 'lib/jquery/jquery',
        'underscore' : 'lib/backbone/underscore-min',
        'backbone' : 'lib/backbone/backbone',
        'marionette' : 'lib/backbone/backbone.marionette.min',
        'text': 'lib/text',
        'mocha' : 'test/lib/mocha',
        'chai' : 'test/lib/chai',
        'chai-jquery' : 'test/lib/chai-jquery',
        'sinon' : 'test/lib/sinon',
        'model' : 'app/entities/ProgressMappingModel',
        'view' : 'app/views/ProgressBarView',
        'template': 'app/views/templates/progressbar.html'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        'chai-jquery': ['jquery', 'chai']
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

require(['require', 'chai', 'chai-jquery', 'mocha', 'jquery'], function(require, chai, chaiJquery){

// Chai
    var should = chai.should();
    chai.use(chaiJquery);

    /*globals mocha */
    mocha.setup('bdd');


    require([
        '../../javascripts/test/spec/model/ProgressMappingModel.spec.js'
    ], function(require) {
        console.log("before mocha.run");
        mocha.run();

    });

});