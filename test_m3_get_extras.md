# get_extras

## return form

returns the extras object of the book matching the searchKey.

```js
bookRegister.get_extras(1);
```

returns:

```shell
{
  type: 'magazine',
  comments: 'first folio',
  edition: 'fourth edition'
}
```

##########################################################

## not found parameter, unexistent data, missing parameter, wrong data type

```js
bookRegister.get_extras(5);
bookRegister.get_extras(6);
bookRegister.get_extras();
bookRegister.get_extras("A");
```

Returns null:

```shell
    null
```
