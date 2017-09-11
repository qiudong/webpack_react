import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import App from './coms/App/App.jsx'
import Card from './coms/Card/Card.jsx'
import Detail from './coms/Detail/Detail.jsx'
//import Home from './coms/Home/Home.jsx'
import Dog from './coms/Dog/Dog.jsx'
import Cat from './coms/Cat/Cat.jsx'
import {matchRoutes, renderRoutes} from 'react-router-config'

/**
 * <BrowserRouter
 basename={optionalString}
 forceRefresh={optionalBool}
 getUserConfirmation={optionalFunc}
 keyLength={optionalNumber}
 >
 <App/>
 </BrowserRouter>
 */
const Home =() =>(
    <h1>fdasdfasd</h1>
)

const rouder =(
    <Router basename="/app">
        <div>
            <Route path="/home"  exact component={Home}/>
        </div>
    </Router>
)
export default rouder