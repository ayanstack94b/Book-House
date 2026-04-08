
import { createContext, useState } from 'react';



export const BookContext = createContext()



const BookProvider = ({children}) => {


    const [storedBook, setStoredBook] = useState([])
    const handleMarkAsRead = (currentBook) => {
        console.log(currentBook);
        const isExistedBook = storedBook.find((book) => book.bookId == currentBook.bookId)
        if (isExistedBook) {
            alert('already added to cart')
        } else {
            setStoredBook([...storedBook, currentBook])
            alert(`${currentBook.bookName} is added to list`)
        }
    }


    const data ={
        storedBook,
        setStoredBook,
        handleMarkAsRead
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;