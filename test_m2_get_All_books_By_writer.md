# get_All_books_By_writer

## return form

Returns an array of book objects of given writer. If no book of given writer is found, returns an empty array.

```js
bookRegister.get_All_books_By_writer("Antony Lee");
```

returns:

```js
[
  "Maria and My",
  "The adventures of Mike the Millipede",
  "NoSql - New Hope",
  "SQL-mysteries",
];
```

##########################################################

## not found parameter

```js
bookRegister.get_All_books_By_writer("Victor Grinan");
bookRegister.get_total_price_of_books_by_writer(1);
bookRegister.get_total_price_of_books_by_writer(true);
```

Returns:

```shell
    []
```

##########################################################

## missing parameter

```js
bookRegister.get_All_books_By_writer();
```

Throws `'missing parameter'`:

```shell
    Error: missing parameter
```
