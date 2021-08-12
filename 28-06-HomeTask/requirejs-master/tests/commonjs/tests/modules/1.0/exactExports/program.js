define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/exactExports/test","a"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/exactExports/test');
var a = require('28-06-HomeTask/requirejs-master/tests/plugins/a');
test.assert(a.program() === exports, 'exact exports');
test.print('DONE', 'info');

});
