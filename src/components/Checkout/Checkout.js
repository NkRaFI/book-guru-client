import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Checkout.css';
import Header from '../Header/Header';
import { UserContext } from '../../App';

const Checkout = () => {
    const loggedInUser = useContext(UserContext)[0];
    const { id } = useParams();
    const [book, setBook] = useState({})
    const { title, thumbnailUrl, price, authors} = book;
    useEffect(() => {
        if(id){
            fetch(`http://localhost:5055/getBookById/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
        }
    }, [id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderInfo = {...loggedInUser,book, shipment: data,orderTime: new Date()}
        fetch('http://localhost:5055/placeOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Your Order Placed Successfully!!, checkout orders page to see your orders")
            }
        })
    };

    return (
        <div>
            <Header></Header>
            <div className="checkout d-flex justify-content-center">
                <div className="checkoutBg">
                    <h3 className="text-center mb-3">Place Order</h3>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card mb-2 p-3" style={{ width: '100%', height: '465px' }}>
                                <img className="img-fluid m-auto" style={{ width: '10rem' }} src={thumbnailUrl} alt="" />
                                <h5 className="my-3">{title || "please select a book for order"}</h5>
                                <p>{authors?.[0]}</p>
                                <div className="d-flex justify-content-center my-3">
                                    <h3 className="text-primary">${price}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 my-4">
                            <form className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" {...register("name", { required: true })} placeholder="Name" />
                                {errors.name && <span>This field is required</span>}
                                <input className="form-control" {...register("email", { required: true })} placeholder="Email" />
                                {errors.email && <span>This field is required</span>}
                                <input className="form-control" {...register("address", { required: true })} placeholder="Address" />
                                {errors.address && <span>This field is required</span>}
                                <input className="form-control" {...register("phone", { required: true })} placeholder="Phone" />
                                {errors.phone && <span>This field is required</span>}

                                <input className="form-control btn btn-outline-primary" type="submit" value="place order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;