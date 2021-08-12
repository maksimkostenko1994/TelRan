require.config({
    config: {
        foo: {
            related: 'bar'
        }
    }
});

require(["28-06-HomeTask/requirejs-master/tests/specialDeps/foo"], function (foo) {
    doh.register(
        "specialDeps",
        [
            function specialDeps(t) {
                t.is("foo", foo.name);
                t.is("bar", foo.related);
            }
        ]
    );
    doh.run();
});
