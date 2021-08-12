define(['28-06-HomeTask/requirejs-master/tests/nestedDefine/two', 'three'], function (two, three) {
    return {
        name: 'four',
        twoName: two.name,
        threeName: three.name
    };
});
