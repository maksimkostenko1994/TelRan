require({
        baseUrl: requirejs.isBrowser ? "./" : "./plugins/"
},      ['require', '28-06-HomeTask/requirejs-master/tests/plugins/earth', 'prime/earth'],
function (require,   earth,   primeEarth) {

    doh.register(
        "pluginsSync",
        [
            function pluginsSync(t){
                t.is("a", earth.getA().name);
                t.is("c", earth.getC().name);
                t.is("b", earth.getB().name);
                t.is("aPrime", primeEarth.getA().name);
                t.is("cPrime", primeEarth.getC().name);
                t.is("bPrime", primeEarth.getB().name);
             }
        ]
    );
    doh.run();
});
