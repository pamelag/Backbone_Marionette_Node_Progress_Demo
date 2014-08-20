define(function(require) {
    var $= require('jquery'),
        Backbone = require('backbone'),
        _= require('underscore'),
        Marionette = require('marionette'),
        template = _.template(require('text!./templates/progressbar.html'));

    var self = this;
    var model;
    var dataCollection;

    var progress = 0;
    var progressBarElement, progressBarValueElement;
    var selectedProgressId;
    var progressBarLabelId;
    var jQueryProgressBarId,jQueryLabelSelectorId;
    var colourValue = "#D3F5F4";

    return Marionette.ItemView.extend({
        events: {
            "click #minus25": 'decrementBy25',
            "click #minus10": 'decrementBy10',
            "click #plus10": 'incrementBy10',
            "click #plus25": 'incrementBy25',
            "change #pbselector": 'changePBSelection'
        },

        initialize: function(el) {
            _.bindAll(this);
            self = this;
            progress = 0;

            selectedProgressId = 'progressbar1';
            dataCollection = this.options.progressMappingCollection;
        },

        render: function(el) {
            this.$el.html(template());
            for(var index = 0; index <= 3; index++){
                jQueryProgressBarId = "#" + "progressbar" + index;
                progressBarLabelId = "progressbar" + index + "_" + "label";

                progressBarElement = this.$el.find(jQueryProgressBarId);
                progressBarValueElement = this.$el.find(".ui-progressbar-value");

                progressBarElement.css( {
                        backgroundColor: "#ffffff"
                    });
                progressBarValueElement.css( {
                    backgroundColor: colourValue
                });

                progressBarElement.progressbar({
                    value: progress
                });
                progressBarElement.append('<span id="' + progressBarLabelId + '" class="progress-label">'+progress+'%</span>');
            }
        },

        decrementBy25: function() {
            self.preProcess();
            model.decrementBy25();
            self.progress();
            self.postProcess();
        },

        decrementBy10: function() {
            self.preProcess();
            model.decrementBy10();
            self.progress();
            self.postProcess();
        },

        incrementBy10: function() {
            self.preProcess();
                model.incrementBy10();
            self.progress();
            self.postProcess();
        },

        incrementBy25: function() {
            self.preProcess();
                model.incrementBy25();
            self.progress();
            self.postProcess();
        },

        changePBSelection: function(evt) {
            model = dataCollection.findWhere({selectorId: evt.target.value});
            selectedProgressId = model.get('progressBarId');
        },

        preProcess: function() {
            jQueryProgressBarId = "#" + selectedProgressId;
            jQueryLabelSelectorId = "#" + selectedProgressId + "_label";

            model = dataCollection.findWhere({progressBarId: selectedProgressId});
        },

        postProcess: function() {
            this.$el.find(jQueryLabelSelectorId).text(model.get('lastProgressVal') + '%');
            model = dataCollection.findWhere({progressBarId: selectedProgressId});
        },

        progress: function() {
            progress = model.get("lastProgressVal");
            this.$el.find(jQueryProgressBarId).progressbar( "option", {
                value: model.get("lastProgressVal")
            });
            model.get("lastProgressVal") > 100 ? colourValue = "#F898A6" : colourValue = "#D3F5F4";
            var id = "#" + selectedProgressId + "> div";
            $(id).css( {
                background: colourValue
            }) ;
        }
    });
});
