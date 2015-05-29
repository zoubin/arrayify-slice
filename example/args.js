var arrayify = require('..');
!function () {
    console.log(arrayify(arguments, 1, 3));
    // [1, 2]
}(0, 1, 2, 3);

