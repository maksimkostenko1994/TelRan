require({
        baseUrl: requirejs.isBrowser ? "./" : "./relative/",
        paths: {
            text: "../../../text/text"
        },
        packages: [
            {
                name: 'greek',
                main: 'main',
                lib: '.'
            }
        ]
    },
    ["require", "28-06-HomeTask/requirejs-master/tests/relative/foo/bar/one", "greek/alpha"],
    function(require, one, alpha) {
        doh.register(
            "relative",
            [
                function relative(t){
                    t.is("one", one.name);
                    t.is("bar", one.barName);
                    t.is("two", one.twoName);
                    t.is("three", one.threeName);
                    t.is("hello world", one.message);

                    t.is('alpha', alpha.name);
                    t.is('greek', alpha.getGreekName());
                }
            ]
        );

        doh.run();
    }
);
