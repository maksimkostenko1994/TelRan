define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/determinism/test","submodule/a"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/determinism/test');
require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/determinism/submodule/a');
test.print('DONE', 'info');

});
