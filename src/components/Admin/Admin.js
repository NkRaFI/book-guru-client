import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import manageImg from '../../icons/grid 1.png';
import plusImg from '../../icons/plus 1.png';
import editImg from '../../icons/edit 1.png';
import AddBook from '../AddBook/AddBook';


const Admin = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-3 py-3 adminDashboard">
            <Link className="logo ml-3" to='/home'>BOOK GURU</Link>
                <div className="d-flex flex-md-column justify-content-between justify-content-md-start align-items-start">
                    <Link className="dashboardLink"> <img src={manageImg} alt=""/>Manage books</Link>
                    <Link className="dashboardLink"> <img src={plusImg} alt=""/>Add book</Link>
                    <Link className="dashboardLink"> <img src={editImg} alt=""/>Edit book</Link>
                </div>
            </div>
            <div className="col-12 col-md-9">
                <AddBook></AddBook>
            </div>
        </div>
    );
};

export default Admin;