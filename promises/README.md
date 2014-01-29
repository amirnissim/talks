PROMISES
============
![logo](http://promises-aplus.github.com/promises-spec/assets/logo-small.png)

## BACKGROUND
* async code made easier
* first came the libraries
  * [Q](Library https://github.com/kriskowal/q)
  * [jQuery](http://api.jquery.com/promise/)
  * [Angular](http://docs.angularjs.org/api/ng.$q)
* then came the browsers
  * Chrome 32 and Opera 19
  * Firefox Nightly - Partial support as of Jan. 2014
* part of [ES6 spec.](https://github.com/domenic/promises-unwrapping)
* which follows the [Promises/A](https://github.com/promises-aplus/promises-spec) standard


## EXAMPLE
Create
```js
var promise = new Promise(function(resolve, reject) {
  // doing something async

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

Use
```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

Chain
```js
promise.then(...).then(...)
```

All
```js
Promise.all(arrayOfPromises).then(function(arrayOfResults) {
  //...
});
```


## MORE INFO
Great article on [html5rocks](http://www.html5rocks.com/en/tutorials/es6/promises/)
