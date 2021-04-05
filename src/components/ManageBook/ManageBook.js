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

    const handleDelete = (id) =>{
       fetch(`http://localhost:5055/deleteBook/${id}`, {method: 'DELETE'})
       .then(res => res.json())
       .then(data => {
           if(data){
            alert("book deleted successfully, please look at the home page to confirm")
           }
       })
    }

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
                <tbody>
                    {
                        books.map(book =>
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.authors[0]}</td>
                                <td>${book.price}</td>
                                <td>
                                    <img className="actionImg" src={editAction} alt=""/>
                                    <img className="actionImg" onClick={()=>handleDelete(book._id)} src={deleteAction} alt=""/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {
                (books.length === 0) && 
                <div className="manageSpinner">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }

        </div>
    );
};

export default ManageBook;