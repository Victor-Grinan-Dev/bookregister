'use strict'

const register = require('./bookRegister.js');
const books = require('./datastorage.json');
const bookRegister = new register(books);
//console.log(bookRegister.get_total_price_of_books_by_writer("Victor Grinan"));
//console.log(bookRegister.get_All_books_By_writer("Emily White"));
//console.log(bookRegister.get_extras());
//console.log(bookRegister.get_Price(1));
console.log(bookRegister.get_book_genres());
