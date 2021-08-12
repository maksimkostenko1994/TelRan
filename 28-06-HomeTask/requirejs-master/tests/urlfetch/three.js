define("three", {
    name: "three"
});

define("four", ["28-06-HomeTask/requirejs-master/tests/urlfetch/three"], function (three) {
    return {
        name: "four",
        threeName: "three"
    };
});
