define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/absolute/test","submodule/a","b"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/absolute/test');
var a = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/absolute/submodule/a');
var b = require('28-06-HomeTask/requirejs-master/tests/plugins/b');
test.assert(a.foo().foo === b.foo, 'require works with absolute identifiers');
test.print('DONE', 'info');

});
