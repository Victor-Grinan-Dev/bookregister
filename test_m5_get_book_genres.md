# get_book_genres

## return form

returns genres of the book as an array.

```js
bookRegister.get_book_genres(1);
```

returns:

```shell
200
```

#######################################################

## not found parameter

```js
bookRegister.get_Price("Victor Grinan");
bookRegister.get_Price("Antony Lee");
bookRegister.get_Price(true);
bookRegister.get_Price(6);
```

Returns:

```shell
    []
```

##########################################################

## missing parameter

```js
bookRegister.get_Price();
```

Returns:

```shell
    []
```
