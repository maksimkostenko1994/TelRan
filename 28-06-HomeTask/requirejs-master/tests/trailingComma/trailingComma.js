
//Trailing comma is there ON PURPOSE
require(['28-06-HomeTask/requirejs-master/tests/trailingComma/a',], function(a) {
    doh.register(
        "trailingComma",
        [
            function trailingComma(t){
                t.is('a', a.name, 'a.name is a');
            }
        ]
    );
    doh.run();
});
