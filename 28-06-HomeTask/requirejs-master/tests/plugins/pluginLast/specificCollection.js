define(['28-06-HomeTask/requirejs-master/tests/plugins/pluginLast/collection', 'text!specificCollection.html'], function (collection, html) {
    return {
        name: 'specificCollection',
        html: html,
        collection: collection
    };
});