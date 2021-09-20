import {NavLink} from 'react-router-dom'

import "../../sass/Navigation.scss"

const Navigation = () => {

    return (
        <ul className="navigation-list">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/meals">Meals</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>
    )
}

export default Navigation
