import React, { use } from 'react';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import BookCard from '../../Components/UI/BookCard';

const booksPromise = fetch('/data/booksData.json').then((res) => res.json())

const AllBooks = () => {

    const books = use(booksPromise)
    // console.log(books);
    return (
        <div className='container mx-auto my-5'>
            <h2 className='font-bold text-3xl text-center'></h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
                {
                    books.map((book, i) => 
                    <BookCard 
                    key={i}
                    book={book}></BookCard>
                    )
                }
           </div>
        </div>
    );
};

export default AllBooks;