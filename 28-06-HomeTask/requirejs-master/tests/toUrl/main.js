define(function (require) {
    return {
        html: require('text!./main.html'),
        noext: require('text!28-06-HomeTask/requirejs-master/tests/toUrl/sub/noext'),
        hidden: require('text!.hidden.html'),
        util: require('28-06-HomeTask/requirejs-master/tests/toUrl/sub/util')
    };
});