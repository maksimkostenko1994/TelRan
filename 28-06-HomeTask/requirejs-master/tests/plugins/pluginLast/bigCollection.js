define(['28-06-HomeTask/requirejs-master/tests/plugins/pluginLast/collection', 'text!bigCollection.html'], function (collection, html) {
    return {
        name: 'bigCollection',
        html: html,
        collection: collection
    };
});