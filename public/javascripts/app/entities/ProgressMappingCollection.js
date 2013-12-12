define(function(require){
    var Backbone = require('backbone'),
        _ = require('underscore'),
        mappingListItem = require('./ProgressMappingModel');
    return Backbone.Collection.extend({
        model: mappingListItem

    });
});