define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({

        defaults: function () {
            return {
                progressBarId: '',
                selectorId: '',
                lastProgressVal: 0,
                progressColourValue: '#D3F5F4'
            };
        },
        idAttribute: "_id",
        progressBarId: '',
        selectorId:'',
        lastProgressVal: 0,

        decrementBy25: function() {
            if(this.get("lastProgressVal")-25 >= 0) {
                this.set("lastProgressVal",  this.get("lastProgressVal") - 25);
            } else {
                this.set("lastProgressVal",  0);
            }

        },

        decrementBy10: function() {
            if(this.get("lastProgressVal")-10 >= 0) {
                this.set("lastProgressVal",  this.get("lastProgressVal") - 10);
            } else {
                this.set("lastProgressVal",  0);
            }
        },

        incrementBy10: function() {
            this.set("lastProgressVal", this.get("lastProgressVal") + 10);
        },

        incrementBy25: function() {
            this.set("lastProgressVal", this.get("lastProgressVal") + 25);
        }
    });

});