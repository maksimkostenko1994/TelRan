define(['28-06-HomeTask/requirejs-master/tests/circular/dupe/exported'], function (exported) {
    function func(title) {
        return exported.makeMessage(title);
    }

    func.suffix = 'suffix';

    return func;
});

