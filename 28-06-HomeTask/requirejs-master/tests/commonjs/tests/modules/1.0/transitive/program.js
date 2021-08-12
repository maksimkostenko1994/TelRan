define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/transitive/test","a"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/transitive/test');
test.assert(require('28-06-HomeTask/requirejs-master/tests/plugins/a').foo() == 1, 'transitive');
test.print('DONE', 'info');

});
