# Test Cases for Constructor.

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
