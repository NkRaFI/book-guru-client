import React, { useEffect } from 'react';
import { useState } from 'react';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import Header from '../Header/Header';

const Home = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://serene-falls-59401.herokuapp.com/getBook')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="mx-auto" style={{ width: '70vw' }}>
                        <div className="my-5 d-flex">
                            <input className="form-control" type="text" placeholder="search" />
                            <button className="btn btn-primary">search</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        (books.length === 0) &&
                        <div className="manageSpinner">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        books.map(book => <DisplayBooks book={book} key={book._id}></DisplayBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;