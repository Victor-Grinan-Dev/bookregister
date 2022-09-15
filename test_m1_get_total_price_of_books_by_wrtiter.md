# get_total_price_of_books_by_writer

## return form

returns the total price of all books that have the same writer than the given searchValue as a number.

```js
bookRegister.get_total_price_of_books_by_writer("Antony Lee");
```

returns:

```shell
420
```

##########################################################

## not found parameter

```js
bookRegister.get_total_price_of_books_by_writer("Victor Grinan");
bookRegister.get_total_price_of_books_by_writer(1);
bookRegister.get_total_price_of_books_by_writer(true);
```

Throws `'nothing found with given'`:

```shell
    Error: nothing found with given
```

##########################################################

## missing parameter

```js
bookRegister.get_total_price_of_books_by_writer();
```

Throws `'missing parameter'`:

```shell
    Error: missing parameter
```
