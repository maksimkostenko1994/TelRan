require({
        baseUrl: requirejs.isBrowser ? './' : './circular'
    },
    ["require", "plugin!28-06-HomeTask/requirejs-master/tests/plugins/a"],
    function(require, a) {
        doh.register(
            "circularPlugin",
            [
                function circularPlugin(t) {
                    t.is("a", a.name);
                    t.is("b", a.b.name);
                    t.is("c", a.b.c.name);
                }
            ]
        );
        doh.run();
    }
);
