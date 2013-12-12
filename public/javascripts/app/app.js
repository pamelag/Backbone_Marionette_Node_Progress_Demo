define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Bootstrap = require('bootstrap'),
        Backbone = require('backbone'),
        Marionette = require('marionette');

    var App = new Marionette.Application();

    var Models = null;
    var Collections = null;
    var Views = null;

    var progressMapping1 = null;
    var progressMapping2 = null;
    var progressMapping3 = null;
    var progressMappingCollection = null;

    App.addRegions({
        appHeader: "#app-header",
        appBody: "#app-body"
    });

    App.on("initialize:before", function () {

    });

    App.on("initialize:after", function () {
        Backbone.history.start({ pushState: true });

    });

    App.addInitializer(function() {
        Models = {
            ProgressMappingModel: require('./entities/ProgressMappingModel')
        };
        Collections = {
            PBModelCollection: require('./entities/ProgressMappingCollection')
        };

        Views = {
            ProgressBarView:require('./views/ProgressBarView'),
            HeaderView:require('./views/HeaderView')
        };

        progressMappingCollection = new Collections.PBModelCollection();
        progressMapping1 = new Models.ProgressMappingModel({progressBarId:'progressbar1',selectorId:'progressbar1_selector', lastProgressVal:0});
        progressMapping2 = new Models.ProgressMappingModel({progressBarId:'progressbar2',selectorId:'progressbar2_selector', lastProgressVal:0});
        progressMapping3 = new Models.ProgressMappingModel({progressBarId:'progressbar3',selectorId:'progressbar3_selector', lastProgressVal:0});
        progressMappingCollection.add(progressMapping1);
        progressMappingCollection.add(progressMapping2);
        progressMappingCollection.add(progressMapping3);

        app.vent.trigger("showProgressBar");
    });

    App.vent.on("showProgressBar", function(params){
        var plainHeaderView = new Views.HeaderView();
        var progressBarView = new Views.ProgressBarView({
            progressMappingCollection: progressMappingCollection
        });

        app.appHeader.show(plainHeaderView);
        app.appBody.show(progressBarView);
    });

    return App;
});

