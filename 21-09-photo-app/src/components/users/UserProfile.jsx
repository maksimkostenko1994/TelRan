import {AppContext} from "../../App"
import {useContext, useState} from "react"

import UserAlbums from "../albums/UserAlbums"

const UserProfile = () => {
    const {getCurrentUserObj, updateUser} = useContext(AppContext)

    const [user, setUser] = useState(getCurrentUserObj())

    const changeFieldHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!user.fName.trim() || !user.lName.trim() || !user.email.trim() || !user.password.trim()) return
        console.log(user)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-4 text-center p-3 m-2">
                    {user.avatar ? <img src={user.avatar} className="card-img-top" alt="..."/> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor"
                             className="bi bi-person-fill mx-auto text-primary" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>}
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" name="fName" value={user.fName}
                                       onChange={changeFieldHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" name="lName" value={user.lName}
                                       onChange={changeFieldHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email" value={user.email}
                                       onChange={changeFieldHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="password" value={user.password}
                                       onChange={changeFieldHandler}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Avatar</label>
                                <input type="text" className="form-control" name="avatar" value={user.avatar}
                                       onChange={changeFieldHandler}/>
                            </div>
                            <div className="form-group">
                                <button onClick={() => updateUser(user)} type="submit"
                                        className="btn btn-primary w-100">Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <UserAlbums/>
            </div>
        </div>
    )
}

export default UserProfile