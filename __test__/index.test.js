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

//method 1
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

//method 2
describe('Test get_All_books_By_writer', ()=>{

    const bookRegister = new register(books);

    describe('succesful return', ()=>{

        const expectedValues1 = [
            'Maria and My',
            'The adventures of Mike the Millipede',
            'NoSql - New Hope',
            'SQL-mysteries'
          ];

        test('"Antony Lee" returns array of 4 string items', ()=>{
            expect(bookRegister.get_All_books_By_writer("Antony Lee")).toEqual(expectedValues1);
        });

        const expectedValues2 = [ 'SQL-mysteries' ];

        test('"Emily White" returns returns array of 1 string items', ()=>{
            expect(bookRegister.get_All_books_By_writer("Emily White")).toEqual(expectedValues2);
        });
    });
    
    describe('not found parameter', ()=>{

        const testParams = ["Victor Grinan", 1, true,];

        //TODO: fix place holder for any datatype X%
        test.each(testParams)(`testing each item from testParams`, (item) => {
            expect(bookRegister.get_All_books_By_writer(item)).toEqual([]);
        });
    });

    describe('missing parameter', ()=>{
        test('bookRegister.get_All_books_By_writer() throws error "missing parameter"', ()=>{
            expect(() => bookRegister.get_All_books_By_writer()).toThrow("missing parameter");
        });
    });
});

/*
const dataToTest = new Array(books.length).fill(1).map((value, i)=>{
        value+i
    });
    
    test.each(dataToTest)('testing  %s', price =>{
        const dice = new Dice(ubound);

    });
*/