import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import {matchRoutes, renderRoutes} from 'react-router-config'
import routes1 from './routerCode.jsx'
import routes2 from './router2.jsx'
const Child = ({route}) => (
    <div>
        {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
    </div>
)

export const routes = [
    {
        path:'/',
        component: Child,
        routes:routes1

    }
]

const rouder = ({route}) => (
    <Router>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </Router>
)


export default rouder
