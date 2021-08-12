define("two",
  ["require", "28-06-HomeTask/requirejs-master/tests/nestedDefine/one"],
  function(require, one) {
    return {
      size: "small",
      color: "redtwo",
      doSomething: function() {
        return require("28-06-HomeTask/requirejs-master/tests/nestedDefine/one").doSomething();
      }
    };
  }
);
