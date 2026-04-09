import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';



const Books = () => {

    const [shortingType, setShortingType] = useState('');
    console.log(shortingType);
    const { storedBook } = useContext(BookContext)

    console.log(storedBook);
    return (
        <div className='container mx-auto my-5'>

            <div className="flex justify-center my-3 ">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Short by ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setShortingType('pages')}><a>Pages</a></li>
                        <li onClick={() => setShortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>  Read List: {storedBook.length} </h2>
                    <ListedReadList shortingType={shortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <h2>Wish List: {storedBook.length}</h2>
                    <ListedWishList shortingType={shortingType}></ListedWishList>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;