import {AppContext} from "../../App";
import {useContext} from 'react'
import {useHistory} from "react-router-dom";

import User from "./User";
import {getCurrentUser} from "../../store/usersData";

const Users = () => {
    const {users} = useContext(AppContext)

    const history = useHistory()

    const authUser = getCurrentUser()

    return (
        <div className="container">
            <h1 className="text-center my-5">All our users</h1>
            <div className="row">
                {users.map(user => <User id={user.id} key={user.id} user={user}/>)}
            </div>
            {!authUser ?
                <>
                    <hr/>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button className="btn btn-primary" onClick={() => history.push('/registration')}>Registration
                        </button>
                    </div>
                </>
                : ''
            }
        </div>
    )
}

export default Users
