var test = require('tape');
var arrayify = require('..');

test('arryify arguments', function(t) {
    !function () {
        t.same(arrayify(arguments, 1, 3), [1, 2]);
    }(0, 1, 2, 3);
    t.end();
});

