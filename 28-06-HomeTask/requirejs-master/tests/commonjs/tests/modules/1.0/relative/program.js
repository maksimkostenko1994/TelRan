define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/relative/test","submodule/a","submodule/b"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/relative/test');
var a = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/relative/submodule/a');
var b = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/relative/submodule/b');
test.assert(a.foo == b.foo, 'a and b share foo through a relative require');
test.print('DONE', 'info');

});
