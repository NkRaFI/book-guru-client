import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const loggedInUser = useContext(UserContext)[0];
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://serene-falls-59401.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row my-5 p-md-3">
                    <h3 className="text-center col-12 bg-primary text-white rounded p-2 my-4">Your Orders</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th scope="col">Order Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order=>
                                    <tr key={order._id}>
                                        <td>{order.book.title}</td>
                                        <td>author</td>
                                        <td>{new Date(order.orderTime).toDateString("dd-MM-yyyy")}</td>
                                        <td>{order.book.price}</td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;