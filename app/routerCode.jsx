import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import App from '../app/coms/App/App.jsx'
import Cat from 'bundle-loader?lazy!../app/coms/Cat/Cat.jsx'
import Bundle from './Bundle.jsx'
import {matchRoutes, renderRoutes} from 'react-router-config'

export const bundlePage = (props)=>(App)=>{
    return class extends React.Component{
        render(){
            return (<Bundle load={App}>
                {(About) => <About {...props}/>}
            </Bundle> )
        }

    }
}

//const About = bundlePage()(App);

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
            component: bundlePage()(App),
        },
            {
                path: 'lender/cat',
                component: Dashboard,
            },]
    }

]

export default routes1;