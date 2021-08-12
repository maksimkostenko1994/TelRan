define("funcOne",
    ["require", "28-06-HomeTask/requirejs-master/tests/funcTwo"],
    function (require) {
        var one = function (name) {
            this.name = name;
        };

        one.prototype.getName = function () {
            var inst = new (require("28-06-HomeTask/requirejs-master/tests/funcTwo"))("-NESTED");
            return this.name + inst.name;
        };

        return one;
    }
);
