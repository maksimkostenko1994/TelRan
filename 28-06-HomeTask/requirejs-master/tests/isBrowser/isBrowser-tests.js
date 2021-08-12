require({
        baseUrl: "./"
    },
    ["28-06-HomeTask/requirejs-master/tests/plugins/a"],
    function(a) {
        doh.register(
            "isBrowser",
            [
                function isBrowser(t){
                    t.is(true, a.isBrowser);
                    t.is(true, requirejs.isBrowser);
                }
            ]
        );
        doh.run();
    }
);
