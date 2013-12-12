define(function(require) {
    var model = require('model');

    describe('Models', function() {

        describe('ProgressMappingModel', function() {
            it('should default values', function() {
                var sample = new model();
                sample.lastProgressVal.should.equal(0);
                sample.progressBarId.should.equal('');
                sample.selectorId.should.equal('');
            });

            it("sets passed attributes", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'progressbar1_selector',
                    lastProgressVal:0
                });
                sample.get("lastProgressVal").should.equal(0);
                sample.get("progressBarId").should.equal('progressbar1');
                sample.get("selectorId").should.equal('progressbar1_selector');
            });

            it("should increment lastProgressVal by 10", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:0
                });
                sample.incrementBy10();

                sample.get("lastProgressVal").should.equal(10);
            });

            it("should increment lastProgressVal by 25", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:0
                });
                sample.incrementBy25();

                sample.get("lastProgressVal").should.equal(25);
            });

            it("should decrement lastProgressVal by 10", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:20
                });
                sample.decrementBy10();

                sample.get("lastProgressVal").should.equal(10);
            });

            it("should decrement lastProgressVal by 25", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:50
                });
                sample.decrementBy25();

                sample.get("lastProgressVal").should.equal(25);
            });

            it("should set lastProgressVal to 0 if decremented value is less than 0 while decrementing 10", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:0
                });
                sample.decrementBy10();

                sample.get("lastProgressVal").should.equal(0);
            });

            it("should set lastProgressVal to 0 if decremented value is less than 0 while decrementing 25", function () {
                var sample = new model({
                    progressBarId:'progressbar1',
                    selectorId:'pbselector1',
                    lastProgressVal:0
                });
                sample.decrementBy25();

                sample.get("lastProgressVal").should.equal(0);
            });
        });
    });
});