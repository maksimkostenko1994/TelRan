define("two", ["28-06-HomeTask/requirejs-master/tests/nestedDefine/one", "three", "one"], function (one, three, one2) {
    return {
        name: "two",
        oneName: one.name,
        oneName2: one2.name,
        threeName: three.name
    };
});
