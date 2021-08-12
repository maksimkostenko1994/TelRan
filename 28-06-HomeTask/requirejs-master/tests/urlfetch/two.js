define("one", {
    name: "one"
});

define("two", ["28-06-HomeTask/requirejs-master/tests/nestedDefine/one"], function (one) {
    return {
        name: "two",
        oneName: "one"
    };
});
