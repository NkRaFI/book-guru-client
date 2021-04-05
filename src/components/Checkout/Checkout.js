import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Checkout.css';
import Header from '../Header/Header';

const Checkout = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const { title, thumbnailUrl, price } = book;
    useEffect(() => {
        fetch(`http://localhost:5055/getBookById/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderInfo = {book, order: data}
        fetch('http://localhost:5055/placeOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <div>
            <Header></Header>
            <div className="checkout d-flex justify-content-center">
                <div className="checkoutBg">
                    <h3 className="text-center mb-3">Checkout</h3>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card ml-4 mb-2 p-3" style={{ width: '20rem', height: '465px' }}>
                                <img className="img-fluid m-auto" style={{ width: '10rem' }} src={thumbnailUrl} alt="" />
                                <h5 className="my-3">{title}</h5>
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

                                <input className="form-control btn btn-outline-primary" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;