import {useContext, useState} from "react";
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";

const Login = () => {

    const [currentUser, setCurrentUser] = useState({email: '', password: ''})

    const onChangeHandler = ({target}) => {
        setCurrentUser({...currentUser, [target.name]: target.value})
    }

    const {changeCurrentUser} = useContext(AppContext)
    const history = useHistory()

    return (
        <div className='container my-5'>
            <div className='col-6 mx-auto my-5'>
                <h2 className="text-center">Enter your data please</h2>
                <input
                    className="form-control my-3"
                    type="text"
                    name="email"
                    placeholder="Type email"
                    onChange={onChangeHandler}
                    value={currentUser.email}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="password"
                    placeholder="Type password"
                    value={currentUser.password}
                    onChange={onChangeHandler}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary"
                            onClick={() => {
                                changeCurrentUser(currentUser)
                                history.push("/")
                            }}
                    >login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login