require({
        baseUrl: "./",
        paths: {
            "bar/foo": "foo2"
        }
    },
    ["require", "28-06-HomeTask/requirejs-master/tests/paths/relativeNormalize/bar/baz"],
    function(require, baz) {
        doh.register(
            "relativeNormalize",
            [
                function relativeNormalize(t){
                    t.is("baz", baz.name);
                    t.is("foo2", baz.foo.name);
                }
            ]
        );

        doh.run();
    }
);
