import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';



const Books = () => {

    const { storedBook } = useContext(BookContext)

    console.log(storedBook);
    return (
        <div className='container mx-auto my-5'>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>  Read List: {storedBook.length} </h2>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <h2>Wish List: {storedBook.length}</h2>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;