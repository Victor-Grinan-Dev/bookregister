'use strict';

const books = require('../datastorage.json');
const register = require('../bookRegister.js');

describe("Testing the constructor", ()=>{

    describe("Rising errors", ()=>{
        test('Test the missing parameter', ()=>{
            expect(()=>new register()).toThrow('data storage missing');
        });
    });

    describe("Test success", ()=>{
        const bookRegister = new register(books)
        test('data is defined', ()=>{
            expect(bookRegister.data).toBeDefined();
        });
    });
});

describe('Test get_total_price_of_books_by_writer', ()=>{

    const bookRegister = new register(books);

    describe('succesful return', ()=>{
        test('"Antony Lee" returns 420', ()=>{
            expect(bookRegister.get_total_price_of_books_by_writer("Antony Lee")).toEqual(420);
        });

        test('"Emily White" returns 36', ()=>{
            expect(bookRegister.get_total_price_of_books_by_writer("Emily White")).toEqual(36);
        });
    });


    describe('not found parameter', ()=>{

        const testParams = ["Victor Grinan", 1, true,];

        //TODO: fix place holder for any datatype X%
        test.each(testParams)(`testing each item from testParams`, (item) => {
            expect(() => bookRegister.get_total_price_of_books_by_writer(item)).toThrow('nothing found with given');
        });
    });

    describe('missing parameter', ()=>{
        test('bookRegister.get_total_price_of_books_by_writer() throws error "missing parameter"', ()=>{
            expect(() => bookRegister.get_total_price_of_books_by_writer()).toThrow("missing parameter");
        });
    });
});

describe('Test get_All_books_By_writer', ()=>{

    
});

/*
const dataToTest = new Array(books.length).fill(1).map((value, i)=>{
        value+i
    });
    
    test.each(dataToTest)('testing  %s', price =>{
        const dice = new Dice(ubound);

    });
*/