require({
        baseUrl: requirejs.isBrowser ? "./" : "./remoteUrls/"
    },
    ["require", "28-06-HomeTask/requirejs-master/tests/remoteUrls/jqwrap"],
    function(require, jqwrap) {
        doh.register(
            "remoteUrls",
            [
                function remoteUrls(t){
                    t.is(true, jqwrap.isFunction);
                    t.is(true, !!jqwrap.swfobject);
                    t.is('util', jqwrap.util.name);
                    t.is('util2', jqwrap.util2.name);
                }
            ]
        );

        doh.run();
    }
);
