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
import {matchRoutes, renderRoutes} from 'react-router-config'

/**
 * 配置路由的第一种写法(推荐使用)
 * 问题：
 * 1. 怎么接入redux
 * @param routes
 * @constructor
 */
const Child = ({route}) => (
    <div>
        {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
    </div>
)
export const routes = [
    {
        path: '/app',
        component: Child,
        routes: [
            {
                path: '/app',
                component: App,
                exact: true,
            },
            {
                path: '/app/card',
                component: Card,
            },
            {
                path: '/app/detail',
                component: Child,
                routes: [
                    {
                        path: '/app/detail',
                        component: Detail,
                        exact: true,
                    },
                    {
                        path: '/app/detail/cat',
                        component: Child,
                        routes: [
                            {
                                path: '/app/detail/cat',
                                exact: true,
                                component: Cat,
                            },
                            {
                                path: '/app/detail/cat/home',
                                component: Home,
                            }
                        ]
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

const rouder = ({route}) => (
    <Router>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </Router>
)


export default rouder
