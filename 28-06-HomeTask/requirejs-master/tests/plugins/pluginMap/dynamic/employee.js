define('employee', ['plugin!28-06-HomeTask/requirejs-master/tests/plugins/pluginMap/dynamic/person'], function(person) {
    return {
        name: 'employed ' + person.name
    };
});
