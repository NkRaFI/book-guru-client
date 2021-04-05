import React, { useEffect, useState } from 'react';
import editAction from '../../icons/action1.png';
import deleteAction from '../../icons/action2.png';
import './ManageBook.css';

const ManageBook = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/getBook')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mx-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Book name</th>
                        <th scope="col">Author name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    (books.length === 0) && 
                    <div className="manageSpinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <tbody>
                    {
                        books.map(book =>
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.authorName || 'author name'}</td>
                                <td>${book.price}</td>
                                <td>
                                    <img className="actionImg" src={editAction} alt=""/>
                                    <img className="actionImg" src={deleteAction} alt=""/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageBook;