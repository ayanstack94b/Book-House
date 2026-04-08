import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Books = () => {

    const { storedBook, wishList } = useContext(BookContext)
    
    console.log(storedBook);
    return (
        <div className='container mx-auto'>
            Read List: {storedBook.length} <br />
            Wish List: {storedBook.length}
        </div>
    );
};

export default Books;