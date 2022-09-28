'use strict'

module.exports = class BookRegister {

    constructor(data){
        if (!data) {
            throw new Error('data storage missing');
        }
        this.data=data;
    }

    get_total_price_of_books_by_writer(searchValue){
           
        if (!searchValue){
            throw new Error('missing parameter');   
        }else{
            let total = 0;
            for(let item of this.data){
                if (item.writer ===searchValue){
                    total += item.price;
                }
            }
            if (total === 0){
                throw new Error('nothing found with given');
            }
            return total;
        } 
    }

    get_All_books_By_writer(searchValue){
        
        if(!this.data){
            return 'no data';
        }
        if (!searchValue){
            throw new Error('missing parameter');
        }else{
            const books = [];
            for(let item of this.data){
                if (item.writer === searchValue){
                    books.push(item.bookname)
                }
            }
            return books;
        }
    }

    get_extras(searchKey){
       
        for(let item of this.data){
            if (item.bookNumber ===searchKey){
                if (item.extras){
                return item.extras;
                }
                return null; 
            }
        }

            return null; 
       
    }
    get_Price(bookNumber){
        
        for (let item of this.data){
            if(item.bookNumber ===bookNumber){
                return item.price;
            }
        }
        throw new Error('nothing found with given');
        
    }

    get_book_genres(searchKey){
        
        for (let item of this.data){
            if(item.bookNumber ===searchKey){
                return item.genres;
            }
        }
        return [];
    }
    
} 
