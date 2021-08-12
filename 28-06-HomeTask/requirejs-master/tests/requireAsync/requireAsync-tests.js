define('a', {
    name: 'a'
});

require(['28-06-HomeTask/requirejs-master/tests/plugins/a', 'b'], function (a, b) {
    doh.register(
        "requireAsync",
        [
            function requireAsync(t){
                t.is('a', a.name);
                t.is('b', b.name);
            }
        ]
    );

    doh.run();
});

define('b', {
    name: 'b'
});
