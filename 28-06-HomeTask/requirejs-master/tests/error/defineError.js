define(['28-06-HomeTask/requirejs-master/tests/plugins/a'], function (a) {
    return {
        name: 'hasDefineError',
        broken: a.doesNotExist.blowsUp
    };
});
