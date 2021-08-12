define(function (require) {
    //Important, notice the space between require and arg calls
    var b = require ('28-06-HomeTask/requirejs-master/tests/plugins/b');

    return (a = {
        name: 'a',
        b: b,
        ids: [],
        add: function (id) {
            this.ids.push(id);
        }
    });
});
