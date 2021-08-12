define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/system"], function(require, exports, module) {

exports.print = function () {
    var system = require("28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/system");
    var stdio = system.stdio;
    stdio.print.apply(stdio, arguments);
};

exports.assert = function (guard, message) {
    if (guard) {
        console.log('PASS ' + message, 'pass');
    } else {
        console.error('FAIL ' + message, 'fail');
    }
};


});
