import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleIcon from '../../icons/Group 573.png';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const setLoggedInUser = useContext(UserContext)[1];

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var {displayName, email} = result.user;
                const newUser = {
                    email,
                    name: displayName
                }
                setLoggedInUser(newUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div>
            <Header></Header>
            <div className="d-flex justify-content-center my-5">
                <div className="text-center p-3 my-5 card" style={{ width: '300px' }}>
                    <h3>Login</h3>
                    <hr />
                    <h5>login in with</h5>
                    <button onClick={handleGoogleLogin} className="btn btn-outline-primary my-3"><img style={{ width: '50px' }} src={googleIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;