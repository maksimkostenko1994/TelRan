define("funcThree",
    ["28-06-HomeTask/requirejs-master/tests/funcFour"],
    function (four) {
        var three = function (arg) {
            return arg + "-" + require("28-06-HomeTask/requirejs-master/tests/funcFour").suffix();
        };

        three.suffix = function () {
            return "THREE_SUFFIX";
        };

        return three;
    }
);
