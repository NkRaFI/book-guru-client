import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import Header from '../Header/Header';

const Home = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/getBook')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="m-auto" style={{ width: '400px' }}>
                    <div className="my-5 d-flex">
                        <input className="form-control" type="text" placeholder="search" />
                        <button className="btn btn-primary">search</button>
                    </div>
                </div>
                <div className="row">
                    {
                        books.map(book => <DisplayBooks book={book} key={book._id}></DisplayBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;