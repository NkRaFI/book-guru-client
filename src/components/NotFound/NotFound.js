import React from 'react';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div style={{textAlign: 'center', color: 'gray', marginTop:"50px"}}>
                <h3>page not found</h3>
                <h3>404 Error!!</h3>
            </div>
        </div>
    );
};

export default NotFound;