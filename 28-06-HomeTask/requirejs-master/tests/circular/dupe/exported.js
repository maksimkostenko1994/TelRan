define(function(require, exports) {
    exports.makeMessage = function (title) {
        return 'hello ' + title + ' ' + require('28-06-HomeTask/requirejs-master/tests/func').suffix;
    };

    exports.justSuffix = function() {
        return require('28-06-HomeTask/requirejs-master/tests/func').suffix;
    };
});