'use strict';

const books = require('../datastorage.json');
const register = require('../bookRegister.js');
const bookRegister = new register(books);

const booksNumbers = new Array(books.length).fill(1).map((value, i)=>{
    return value + i;
});

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
        test.each(testParams)(`testing each item from booksNumbers`, (item) => {
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

        const testParams = ["Victor Grinan", 1, true];

        //TODO: fix place holder for any datatype X%
        test.each(testParams)(`testing each item from booksNumbers`, (item) => {
            expect(bookRegister.get_All_books_By_writer(item)).toEqual([]);
        });
    });

    describe('missing parameter', ()=>{
        test('bookRegister.get_All_books_By_writer() throws error "missing parameter"', ()=>{
            expect(() => bookRegister.get_All_books_By_writer()).toThrow("missing parameter");
        });
    });
});

//method 3
describe('Test get_extras', ()=>{

    describe('succesful return', ()=>{

        const expectedValues1 = {
            type: 'magazine',
            comments: 'first folio',
            edition: 'fourth edition'
            };

        test('searchKey(1) returns object expectedValue', ()=>{
            expect(bookRegister.get_extras(1)).toEqual(expectedValues1);
        });
    });

    describe('not found parameter to returns null', ()=>{

        test(`testing missing data from data store`, () => {
            expect(bookRegister.get_extras(5)).toBe(null);
        });
        test(`testing parameter not found in data store`, () => {
            expect(bookRegister.get_extras(10)).toBe(null);
        });
        test(`testing missing parameter`, () => {
            expect(bookRegister.get_extras()).toBe(null);
        });
        test(`testing wrong parameter`, () => {
            expect(bookRegister.get_extras('A')).toBe(null);
        });
    });
});

//method 4
describe('Test get_Price', ()=>{

    describe('succesful return', ()=>{
        test.each(booksNumbers)('testing  %d', dataIndex =>{

            expect(bookRegister.get_Price(dataIndex)).toEqual(books[dataIndex - 1].price);

        });
    });

    describe('not found parameter throws "nothing found with given"', ()=>{
        const testParams = [
                "Victor Grinan",
                "Antony Lee",
                true,
                6
            ];
        test.each(testParams)('testing  %d', param =>{
            expect(()=>bookRegister.get_Price(param).toThrow('nothing found with given'));
        });
    });

    test('missing parameter throws "nothing found with given"', () => {
         expect(() => bookRegister.get_Price()).toThrow('nothing found with given');
    });
});

//method 5
describe('Test get_book_genres', ()=>{

    describe('succesful returns', ()=>{

        const booksNumbers = new Array(books.length).fill(1).map((value, i)=>{
            return value + i;
        });

        test.each(booksNumbers)('testing  %d', dataIndex =>{
            expect(()=>bookRegister.get_book_genres(dataIndex).toEqual(books[dataIndex - 1].genres));
        });
    });

    describe('Test not found parameter returns empty array []', ()=>{
        const testParams = ["Victor Grinan", "Antony Lee",  1, true];

        test.each(testParams)('testing  %s', param =>{
            expect(()=>bookRegister.get_book_genres(param).toBe([]));
        });
    });


    test('testing missing parameter returns empty array [] ', () =>{
        expect(()=>bookRegister.get_book_genres().toBe([]));
    });
   
});


