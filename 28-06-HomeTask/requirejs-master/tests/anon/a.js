define(function (require) {
    var b =  require("28-06-HomeTask/requirejs-master/tests/nestedRelativeRequire/sub/b");
    return {
        name: "a",
        bName: b.f()
    };
});
