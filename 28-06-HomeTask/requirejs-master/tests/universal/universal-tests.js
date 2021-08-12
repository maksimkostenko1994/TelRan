require({baseUrl: requirejs.isBrowser ? "./" : "./universal/"}, ["28-06-HomeTask/requirejs-master/tests/universal/spell"], function(spell) {
    doh.register(
        "universal",
        [
            function universal(t){
                t.is('spell', spell.name);
                t.is('newt', spell.newtName);
                t.is('tail', spell.tailName);
                t.is('eye', spell.eyeName);
            }
        ]
    );

    doh.run();
});
