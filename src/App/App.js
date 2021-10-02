import React, {useEffect, useRef, useState} from 'react';
import {Route, Switch, HashRouter as Router} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Topics from "./Topicks/Topics";


import "../styles/index.scss"
import Header from "./Header/Header";

const App = () => {

    return (
        <>
            <Header stars={2} name={"Арина"}/>
            <main className={`main`}>
                <Router>
                    <Switch>
                        <Route exact path={"/"} render={() => <PrivateRoute/>}/>
                        <Route path={'/topics'} render={() => (<Topics/>)}/>
                    </Switch>
                </Router>
            </main>
        </>
    );
};


export default App;
