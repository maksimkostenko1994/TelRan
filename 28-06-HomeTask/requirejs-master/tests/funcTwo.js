define("funcTwo",
    ["require", "28-06-HomeTask/requirejs-master/tests/funcOne"],
    function (require) {
        var two = function (name) {
            this.name = name;
            this.one = new (require("28-06-HomeTask/requirejs-master/tests/funcOne"))("ONE");
        };
    
        two.prototype.oneName = function () {
            return this.one.getName();
        };

        return two;
    }
);
