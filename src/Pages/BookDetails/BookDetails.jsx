
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

const BookDetails = () => {

    const { id } = useParams()
    const books = useLoaderData()
    const expectedBook = books.find((book) => book.bookId == id)

    const { image, bookName, author, review, totalPages, category, tags, publisher, yearOfPublishing } = expectedBook;
    // console.log(expectedBook);

    const { storedBook, handleMarkAsRead, handleWishList } = useContext(BookContext)

    console.log(storedBook);




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto my-20">

            {/* image div */}

            <figure className='w-full flex items-center justify-center bg-gray-100 rounded'>
                <img
                    src={image} className='h-100'
                    alt="Album" />
            </figure>

            {/* Text div */}

            <div className="card-body space-y-2">
                <h2 className="text-2xl card-title">{bookName}</h2>
                <p className='font-semibold'>By: {author}</p>
                <p className='py-2 border-y font-bold text-lg text-gray-500'>{category}</p>
                <p className='py-2 '><span className="font-bold">Review:</span> {review}</p>
                <div className="flex justify-start items-between gap-2">
                    {
                        tags.map((tag, i) => (
                            <div key={i} className="badge text-green-500 bg-green-100 font-bold">
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <div className="border-t space-y-4">

                    <div className="space-y-4 my-5">

                        <div className="flex justify-between items-between">
                            <span className="font-medium text-gray-600">Number of pages:</span>
                            <h4 className='font-bold'>{totalPages}</h4>
                        </div>
                        <div className="flex justify-between items-between">
                            <span className="font-medium text-gray-600">Publisher:</span>
                            <h4 className='font-bold'>{publisher}</h4>
                        </div>
                        <div className="flex justify-between items-between">
                            <span className="font-medium text-gray-600">Year of Publishing:</span>
                            <h4 className='font-bold'>{yearOfPublishing}</h4>
                        </div>

                    </div>

                    <div className="flex items-center gap-2">
                        <button className="btn btn-primary" onClick={() => handleMarkAsRead(expectedBook)}>
                            Mark as Read</button>
                        <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;