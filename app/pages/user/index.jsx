import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Login from './login/Login.jsx'
import Register from './login/Register.jsx'

const routes = [
    {
        path: '/user',
        component: Login,
        routes: [
            {
                path: '/user/login',
                component: Login
            },
            {
                path: '/user/register',
                component: Register
            }
        ]
    }
]

const User = () => (

    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>

)
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

export default User