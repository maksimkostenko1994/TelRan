require({
    map: {
        '*': {
            'person': 'employee'
        },
        'employee': {
            'person': 'person'
        }
    }
}, ['28-06-HomeTask/requirejs-master/tests/plugins/pluginMap/dynamic/application'], function (application) {

    doh.register(
        'pluginMapDynamic',
        [
            function pluginMapDynamic(t){
                t.is('application', application.name);
                t.is('employed person', application.person.name);
            }
        ]
    );
    doh.run();

});
