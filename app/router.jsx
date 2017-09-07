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
 * 配置路由的第一种写法
 * 问题：
 * 1. 精确匹配问题
 * 2. 代码冗余问题
 * @param routes
 * @constructor
 */
const Detail1 = ({routes}) => (
    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)
const App1 = ({routes}) => (
    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)
const routes = [
    {
        path: '/app',
        component: App1,
        routes: [
            {
                path:'/app/card',
                component: Card,
            },
            {
                path: '/app/detail',
                component: Detail1,
                routes: [
                    {
                        path: '/app/detail/cat',
                        component: Cat
                    },
                    {
                        path: '/app/detail/dog',
                        component: Dog
                    }
                ]
            }
        ]
    },

]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const rouder = (
    <Router>
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)


export default rouder