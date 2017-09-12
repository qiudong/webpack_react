import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import Card from 'bundle-loader?lazy!../app/coms/Card/Card.jsx'
import Detail from 'bundle-loader?lazy!../app/coms/Detail/Detail.jsx'
import Bundle from './Bundle.jsx'
import {matchRoutes, renderRoutes} from 'react-router-config'

// components load their module for initial visit
const Card1 = (props) => (
    <Bundle load={Card}>
        {(Card) => <Card {...props}/>}
    </Bundle>
)

const Detail1 = (props) => (
    <Bundle load={Detail}>
        {(Detail) => <Detail {...props}/>}
    </Bundle>
)
const Child = ({route}) => (
    <div>
        {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
    </div>
)

 const routes2 = [
    {
        path: 'lender',
        component: Child,
        routes: [{
            path: 'lender/card',
            component: Card1,
        },
            {
                path: 'lender/detail',
                component: Detail1,
            },]
    }

]
export default routes2