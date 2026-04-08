import React from 'react';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
            <div className="card bg-base-100  shadow-sm">
                <figure className='p-6'>
                    <img className=' rounded-xl h-50'
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <div className=" flex items-center gap-5">

                        {
                            book.tags.map((tag, i) => <div key={i} className="badge text-green-500 bg-green-100 font-bold p-1">
                                {tag}</div>)
                        }
                    </div>
                    <h2 className="card-title font-bold text-2xl">
                        {book.bookName}
                    </h2>
                    <p className='text-gray-500 text-lg font-semibold pb-4'>by: {book.author}</p>


                    <div className="card-actions text-xl text-gray-500 justify-between border-t border-dashed border-gray-300 pt-4">
                        <div className="font-semibold">{book.category}</div>
                        <div className="font-semibold flex gap-2 items-center ">{book.rating} <MdOutlineStarBorderPurple500 /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;