define("uno",
  ["28-06-HomeTask/requirejs-master/tests/dos", "tres"],
  function(dos, tres) {
    return {
      name: "uno",
      doSomething: function() {
        return {
          dosName: dos.name,
          tresName: tres.name
        };
      }
    };
  }
);
