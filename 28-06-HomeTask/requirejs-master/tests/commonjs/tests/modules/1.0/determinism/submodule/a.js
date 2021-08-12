define(["require", "exports", "module", "test","test","28-06-HomeTask/requirejs-master/tests/plugins/a"], function(require, exports, module) {
var test = require('test');
var pass = false;
var test = require('test');
try {
    require('28-06-HomeTask/requirejs-master/tests/plugins/a');
} catch (exception) {
    pass = true;
}
test.assert(pass, 'require does not fall back to relative modules when absolutes are not available.')

});
