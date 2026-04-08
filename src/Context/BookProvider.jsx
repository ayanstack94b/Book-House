
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';



export const BookContext = createContext()



const BookProvider = ({children}) => {
    const [storedBook, setStoredBook] = useState([])
    const [wishList, setWishList] = useState([])


    const handleMarkAsRead = (currentBook) => {
        console.log(currentBook);

        const isExistedBook = storedBook.find((book) => book.bookId == currentBook.bookId)
        if (isExistedBook) {
            toast.error('Already added to list')
        } else {
            setStoredBook([...storedBook, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }


    const handleWishList= (currentBook) => {

        const isExistInReadList = storedBook.find((book)=> book.bookId === currentBook.bookId)

        if(isExistInReadList){
            toast.error('This Book is already exist')
            return
        }

        const isExistBook = wishList.find((book) => book.bookId == currentBook.bookId)
        if (isExistBook) {
            toast.error('This book is already in read list')
      
            
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }



    const data ={
        storedBook,
        setStoredBook,
        handleMarkAsRead,
        wishList,
        handleWishList
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;