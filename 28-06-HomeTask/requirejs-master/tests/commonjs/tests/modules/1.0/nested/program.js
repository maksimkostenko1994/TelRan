define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/nested/test","a/b/c/d"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/nested/test');
test.assert(require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/nested/a/b/c/d').foo() == 1, 'nested module identifier');
test.print('DONE', 'info');

});
