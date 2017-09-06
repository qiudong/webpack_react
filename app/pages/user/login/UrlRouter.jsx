import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const UrlRouter = () => {
    <Router>
        <div>
            <ul>
                <li><Link to="/link1"/>link1</li>
                <li><Link to="/link2"/>link2</li>
                <li><Link to="/link3"/>link3</li>
                <li><Link to="/link4"/>link4</li>
            </ul>
            <Route path="/:id" Component={Child}></Route>
        </div>


    </Router>
}
const Child = ({match}) => {
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
}

export default UrlRouter;