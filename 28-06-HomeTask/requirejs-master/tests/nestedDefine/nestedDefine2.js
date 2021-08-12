
require(['28-06-HomeTask/requirejs-master/tests/nestedDefine/one'], function (one) {

    define('nested', ['28-06-HomeTask/requirejs-master/tests/nestedDefine/two'], function (two) {
        return {
            name: 'nested',
            two: two
        };
    });

    require(['nested'], function (nested) {
        doh.register(
            "nestedDefine2",
            [
                function nestedDefine2(t) {
                    t.is("one", one.name);
                    t.is("two", nested.two.name);
                    t.is("nested", nested.name);
                }
            ]
        );
        doh.run();
    });
});
