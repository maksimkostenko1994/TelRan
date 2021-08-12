define(["require", "exports", "module", "28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/missing/test","bogus"], function(require, exports, module) {
var test = require('28-06-HomeTask/requirejs-master/tests/commonjs/tests/modules/1.0/missing/test');
try {
    require('bogus');
    test.print('FAIL require throws error when module missing', 'fail');
} catch (exception) {
    test.print('PASS require throws error when module missing', 'pass');
}
test.print('DONE', 'info');

});
