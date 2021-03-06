import React, { useContext } from 'react';
import {Route,Redirect,} from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const loggedInUser = useContext(UserContext)[0];
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email || loggedInUser.name ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;