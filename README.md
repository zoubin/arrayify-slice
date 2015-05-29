# arrayify-slice
slice Array-like collections and return an array

## Usage

```javascript
var arrayify = require('arrayify-slice');
!function () {
    console.log(arrayify(arguments, 1, 3));
    // [1, 2]
}(0, 1, 2, 3);
```

