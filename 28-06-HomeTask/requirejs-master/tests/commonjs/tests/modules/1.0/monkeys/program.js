define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/plugins/a","test"], function(require, exports, module) {
var a = require('28-06-HomeTask/requirejs-master/tests/plugins/a');
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/monkeys/test');
test.assert(exports.monkey == 10, 'monkeys permitted');
test.print('DONE', 'info');

});
