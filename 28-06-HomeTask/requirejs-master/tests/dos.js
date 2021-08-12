define("dos",
  ["28-06-HomeTask/requirejs-master/tests/tres"],
  function(tres) {
    return {
      name: "dos",
      doSomething: function() {
        return {
          tresName: tres.name
        };
      }
    };
  }
);
