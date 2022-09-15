# get_book_genres

## return form

Returns an array of book genres with searchKey as the bookNumber of the book

```js
bookRegister.get_book_genres(1);
```

returns:

```shell
[ 'textbook', 'chronic', 'fiction' ]
```

######################################################

## not found parameter

If none found, returns an empty array.

```js
bookRegister.get_book_genres("Victor Grinan");
bookRegister.get_book_genres("Antony Lee");
bookRegister.get_book_genres(true);
bookRegister.get_book_genres(6);
```

Returns:

```shell
    []
```

######################################################

## missing parameter

if parameter searchKey is missing, returns an empty array.

```js
bookRegister.get_book_genres();
```

Returns:

```shell
    []
```
