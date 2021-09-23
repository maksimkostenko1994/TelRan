import {Link, NavLink, useHistory} from "react-router-dom";

import {AppContext} from "../../App"
import {useContext} from "react";

const Navigation = () => {

    const {currentUser, logoutUser, getUserNameById} = useContext(AppContext)
    const history = useHistory()

    return (
        <nav className="navbar navbar-expand bg-primary mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/users">Users</NavLink></li>
                    <li className="nav-item"><NavLink to="/albums">Albums</NavLink></li>
                </ul>
                {currentUser ?
                    <>
                        <li className="text-white me-3 list-unstyled">{`Hi, ${getUserNameById(currentUser).fName} ${getUserNameById(currentUser).lName}`}</li>
                        <li className="nav-item text-white list-unstyled" onClick={() => {
                            logoutUser()
                            history.push("/")
                        }
                        }>Logout
                        </li>
                    </>
                    :
                    <>
                        <li className="text-white me-3 list-unstyled">Hi, guest!</li>
                        <Link className="nav-item" to="/login">Login</Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navigation
