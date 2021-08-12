require({
        baseUrl: './'
    },
    ['28-06-HomeTask/requirejs-master/tests/plugins/a'],
    function(a) {
        doh.register(
            'cjsSpace',
            [
                function cjsSpace(t){
                    t.is('a', a.name);
                    t.is('b', a.b.name);
                }
            ]
        );
        doh.run();
    }
);
