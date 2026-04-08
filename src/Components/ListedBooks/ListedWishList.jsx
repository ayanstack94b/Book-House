import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../UI/BookCard';

const ListedWishList = () => {
    const { wishList } = useContext(BookContext)

    if (wishList.length === 0) {
        return <div className="bg-base-100 h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-sm">

                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-3xl">💚</span>
                </div>

                <h2 className="text-xl font-semibold text-green-700 mb-2">
                    Your wishlist is empty
                </h2>

                <p className="text-gray-500 text-sm mb-5">
                    Looks like you have not added anything yet. Start exploring and save your favorite items here.
                </p>

                <button className="btn bg-green-600 hover:bg-green-700 text-white border-none">
                    Browse Books
                </button>

            </div>
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
            {
                wishList.map((book, i) => <BookCard key={i} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedWishList;