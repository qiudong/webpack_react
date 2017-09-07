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
import Home from './coms/Home/Home.jsx'
import Dog from './coms/Dog/Dog.jsx'
import Cat from './coms/Cat/Cat.jsx'

const rouder = (

    <Router>
        <App>
            <Switch>
                <Route to="/card" component={Card}/>
                <Route to="/home" component={Home}/>
                <Route to="/detail" render={props => (
                    <Detail>
                        <Route to="/detail/cat" component={Cat}/>
                        <Route to="/detail/dog" component={Dog}/>
                        <Route to="/detail/del" component={Detail}/>
                        <Redirect from="/detail" to="/detail/del"/>
                    </Detail>
                )}/>

                <Redirect from="/" to="/home"/>
            </Switch>
        </App>
    </Router>



)