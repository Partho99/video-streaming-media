import React from "react";
import {Route, Redirect} from 'react-router-dom';

export const IsUserRedirect = ({user, loggedInPath, children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }
                return null;
            }}
        />
    )
}

export const ProtectedRoute = ({user, children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) => {
                if (user) {
                    return children;
                }
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'sign-in',
                                state: {from: location}
                            }}
                        />
                    )
                }
                return null;
            }}
        />
    )
}