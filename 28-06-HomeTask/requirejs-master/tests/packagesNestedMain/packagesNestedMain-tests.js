require({
    packages: [{
        name: 'foo',
        main: 'lib/index'
    }]
}, ['28-06-HomeTask/requirejs-master/tests/specialDeps/foo'], function (foo) {

    doh.register(
        'packagesNestedMain',
        [
            function packagesNestedMain(t){
                t.is('foo', foo.name);
                t.is('bar', foo.bar.name);
            }
        ]
    );
    doh.run();
});
