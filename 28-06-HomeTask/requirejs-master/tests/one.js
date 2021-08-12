//
//  Test comment
//
define('one',
    [
     "require", "28-06-HomeTask/requirejs-master/tests/nestedDefine/two"
    ],
  function(require) {
    var one = {
      size: "large",
      doSomething: function() {
        return require("28-06-HomeTask/requirejs-master/tests/nestedDefine/two");
      }
    };

    return one;
  }
)
