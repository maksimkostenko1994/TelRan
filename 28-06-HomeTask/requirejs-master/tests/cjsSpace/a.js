define(function (require) {
    //Important, notice the space between require and arg calls
    var b = require ('28-06-HomeTask/requirejs-master/tests/plugins/b');

    return {
        name: 'a',
        b: b
    };
});
