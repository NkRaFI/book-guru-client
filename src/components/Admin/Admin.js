import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import manageImg from '../../icons/grid 1.png';
import plusImg from '../../icons/plus 1.png';
import editImg from '../../icons/edit 1.png';
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';


const Admin = () => {
    const [component, setComponent] = useState('manageBook');
    const handleNavigation =()=>{

    }

    return (
        <div className="row">
            <div className="col-12 col-md-3 py-3 adminDashboard">
            <Link className="logo ml-3" to='/home'>BOOK GURU</Link>
                <div className="d-flex flex-md-column justify-content-between justify-content-md-start align-items-start">
                    <p onClick={() =>handleNavigation(setComponent('manageBook'))} className="dashboardLink"> <img src={manageImg} alt=""/>Manage books</p>
                    <p onClick={() =>handleNavigation(setComponent('addBook'))} className="dashboardLink"> <img src={plusImg} alt=""/>Add book</p>
                    <p onClick={() =>handleNavigation(setComponent('editBook'))} className="dashboardLink"> <img src={editImg} alt=""/>Edit book</p>
                </div>
            </div>
            <div className="col-12 col-md-9">
                <div className="adminTitle">
                    <h4>Admin Panel</h4>
                    <Link to='/home'><button className="btn btn-outline-primary">Back to home</button></Link>
                </div>
                {
                    (component === 'manageBook') && <ManageBook></ManageBook>
                }
                {
                    (component === 'addBook') && <AddBook></AddBook> 
                }
                {
                    (component === 'editBook') && <h5 className="text-center mt-5">Edit coming soon....</h5>
                }
            </div>
        </div>
    );
};

export default Admin;