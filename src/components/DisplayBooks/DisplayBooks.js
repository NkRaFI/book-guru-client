import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayBooks.css';

const DisplayBooks = (props) => {
    const {_id, title,thumbnailUrl,price} = props.book;
    return (
        <div className="col-12 col-lg-4">
            <div className="card ml-5 ml-lg-0 my-4 p-3" style={{width:'20rem', height:'465px'}}>
                <img className="img-fluid m-auto" style={{width:'12rem'}} src={thumbnailUrl} alt=""/>
                <h5 className="my-3">{title}</h5>
                <div className="d-flex justify-content-between my-3">
                    <h3 className="text-primary">${price}</h3>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Buy now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayBooks;