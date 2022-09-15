# BookRegister API

## Constructor

### **constructor(jsondata)** (done)

Initializes BookRegister object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

### **get_total_price_of_books_by_writer(searchValue)** (done)

returns the total price of all cars that have the same writer than the given searchValue

> Parameters:
>
> > searchValue is the writer of the book to be searched

> Returns:
>
> > total cumulative price of books matching the searchValue

> Throws:
>
> > if no book with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_All_books_By_writer(searchValue)** (done)

searches books with given writer

> Parameters:
>
> > searchValue is the writer of the book to be searched

> Returns:
>
> > Returns an array of book objects of given writer. If no book of given writer is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_extras(searchKey)** (done)

searches the book matching the searchKey and if match is found returns the extras object otherwise null is returned

> Parameters:
>
> > searchKey is the bookNumber of the book

> Returns:
>
> > returns the extras object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
>
> >

### **get_Price(bookNumber)** (done)

get the price of the book

> Parameters:
>
> > bookNumber of the book which price is to be returned

> Returns:
>
> > returns the price of a book matching the given bookNumber

> Throws:
>
> > if no book with the given bookNumber is found throws an exeption `'nothing found with given'`

### **get_book_genres(searchKey)** (done)

Returns an array of book genres. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the bookNumber of the book

> Returns:
>
> > genres of the book as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >

# The project

## Create a folder for the testproject

- the name of the folder should be `Grinan_Victor_book`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file

## Implement all tests and test them to fail

## Implement corresponding methods

## Test the project until all tests pass

## Submit the project folder

Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file
