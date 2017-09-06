import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

const NoMatchExample = () => (

    <Router>
        <div>
            <ul>
                <li><Link to="/">1111</Link></li>
                <li><Link to="/about">2222222</Link></li>
                <li><Link to="/next">44444444</Link></li>

            </ul>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={Next}></Route>
        </Switch>

        </div>

    </Router>

)
const Home = () =>(
    <h1>home</h1>
)
const About = ()=>(
    <h1>about</h1>
)
const Next = () =>(
    <h1>not fount</h1>
)

export default NoMatchExample;