import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import App from 'bundle-loader?lazy!../app/coms/App/App.jsx'
import Cat from 'bundle-loader?lazy!../app/coms/Cat/Cat.jsx'
import Bundle from './Bundle.jsx'
import {matchRoutes, renderRoutes} from 'react-router-config'

// components load their module for initial visit
const About = (props) => (
    <Bundle load={App}>
        {(About) => <About {...props}/>}
    </Bundle>
)

const Dashboard = (props) => (
    <Bundle load={Cat}>
        {(Dashboard) => <Dashboard {...props}/>}
    </Bundle>
)
const Child = ({route}) => (
    <div>
        {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
    </div>
)

const routes1 = [
    {
        path: '/lender',
        component: Child,
        routes: [{
            path: '/lender/app',
            component: About,
        },
            {
                path: 'lender/cat',
                component: Dashboard,
            },]
    }

]

export default routes1;