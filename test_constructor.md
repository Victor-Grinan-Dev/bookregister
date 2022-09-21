# Test Cases for Constructor.

## Test constructor with out implementation:

```js
 constructor(data){

    }
```

fails the test:

```shell
FAIL  __test__/index.test.js
```

## Test that the missing parameter throws an exception

```js
const bookRegister = new register();
```

This will throw an error `'data storage missing'`

#######################################################

## test bookRegister.data to be defined

```js
const bookRegister = new register(data);
```

This will succesfully create a book register object.
