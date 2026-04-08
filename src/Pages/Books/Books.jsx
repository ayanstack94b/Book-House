import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Books = () => {

        const { storedBook,setStoredBook, handleMarkAsRead } = useContext(BookContext)
    
    console.log(storedBook);
    return (
        <div>
            Listed Books
        </div>
    );
};

export default Books;