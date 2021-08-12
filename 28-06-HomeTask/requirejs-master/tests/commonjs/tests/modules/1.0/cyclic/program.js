define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/cyclic/test","a","b"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/cyclic/test');
var a = require('28-06-HomeTask/requirejs-master/tests/plugins/a');
var b = require('28-06-HomeTask/requirejs-master/tests/plugins/b');

test.assert(a.a, 'a exists');
test.assert(b.b, 'b exists')
test.assert(a.a().b === b.b, 'a gets b');
test.assert(b.b().a === a.a, 'b gets a');

test.print('DONE', 'info');

});
