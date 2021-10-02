import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = () => {


    return (
        <Route
            render={() => {
                return <Redirect to={"/topics"}/>;
            }}
        />
    );
};


export default PrivateRoute;