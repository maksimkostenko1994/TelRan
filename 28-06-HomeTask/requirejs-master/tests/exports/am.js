define(
    [
        '28-06-HomeTask/requirejs-master/tests/exports/bm',
        'cm',
        'module',
        'exports'
    ],
    function (bm, cm, module, exports) {
        exports.name = 'am';
        exports.bName = bm.name;
        exports.cName = cm.name;
    }
);
