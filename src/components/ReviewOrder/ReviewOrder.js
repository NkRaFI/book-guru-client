import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ReviewOrder = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const { title, authors, price } = book;
    useEffect(() => {
        if (id) {
            fetch(`https://serene-falls-59401.herokuapp.com/getBookById/${id}`)
                .then(res => res.json())
                .then(data => setBook(data))
        }
    }, [id])

    let isIdAssigned = true;
    if (id) {
        isIdAssigned = false;
    }
    else {
        isIdAssigned = true;
    }

    return (
        <div>
            <Header></Header>
            <div className="container my-5 p-3 p-md-5">
                <div className="row px-md-5">
                    <h3 className="mb-5 ml-2 ml-md-0">Checkout</h3>
                    <div className="table-responsive">
                        <table className="table bg-light rounded shadow">
                            <thead>
                                <tr>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Author name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{title || "please select a book to review"}</td>
                                    <td>{authors?.[0]}</td>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Total</td>
                                    <td></td>
                                    <td className="font-weight-bold">${price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ width: '100%' }} className="d-flex justify-content-end my-3 mr-2 mr-md-0">
                        <Link to={`/checkout/${id}`}>
                            <button disabled={isIdAssigned} title={(id) ? "Checkout order" : "🚫 please select a book first"} className="btn btn-primary">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;