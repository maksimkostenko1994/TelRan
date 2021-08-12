define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/method/test","a"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/method/test');
var a = require('28-06-HomeTask/requirejs-master/tests/plugins/a');
var foo = a.foo;
test.assert(a.foo() == a, 'calling a module member');
test.assert(foo() == (function (){return this})(), 'members not implicitly bound');
a.set(10);
test.assert(a.get() == 10, 'get and set')
test.print('DONE', 'info');

});
