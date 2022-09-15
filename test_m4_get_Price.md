# get_Price

## return form

returns the total price of all books that have the same writer than the given searchValue as a number.

```js
bookRegister.get_Price(1);
```

returns:

```shell
200
```

##########################################################

## not found parameter

```js
bookRegister.get_Price("Victor Grinan");
bookRegister.get_Price("Antony Lee");
bookRegister.get_Price(true);
bookRegister.get_Price(6);
```

Throws `'nothing found with given'`:

```shell
    Error: nothing found with given
```

##########################################################

## missing parameter

```js
bookRegister.get_Price();
```

Throws `'nothing found with given'`:

```shell
    Error: nothing found with given
```
