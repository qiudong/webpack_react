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

/**
 * 配置路由的第二种写法
 * @param routes
 * @constructor
 */
const rouder = (
    <Router>
        <div>
            <Route path="/app" exact component={App}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" render={() => (
                <div>
                    <Route path="/detail/card" component={Card}></Route>
                    <Route path="/detail/" exact component={Detail}></Route>

                </div>

            )}></Route>
        </div>
    </Router>
)

export default rouder