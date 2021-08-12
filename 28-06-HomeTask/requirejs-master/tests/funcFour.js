define("funcFour",
    ["require", "28-06-HomeTask/requirejs-master/tests/funcThree"],
    function (require) {
        var four = function (arg) {
            return "FOUR called with " + arg;
        };

        four.suffix = function () {
            return require("28-06-HomeTask/requirejs-master/tests/funcThree").suffix();
        };

        return four;
    }
);
