import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import auth from './auth';

export const ProtectedRoute = ({component: Component, level, ...rest}) => {
    const routeLevel = level;
    const userLevel = auth.getUserLevel();

    return <Route
        {...rest}
        render={props => {
            // console.log('Route Level: ' + routeLevel);
            // console.log('User Level: ' + userLevel);
            // console.log(authenticated);
            // console.log(props);
            if (userLevel == routeLevel) { // if the user has the right to access this page, allow them to
                return <Component {...props} />;
            } else if (userLevel >= routeLevel) {
                if (routeLevel != 0) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={'/user/profile'}/>;
                }
            } else { // otherwise redirect them to home or login
                if (routeLevel > 1) {
                    return <Redirect to={'/'}/>;
                } else {
                    return <Redirect to={'/user/login'}/>;
                }
            }
        }}
    />;
};
