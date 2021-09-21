import {useContext, useState} from "react";
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";

const Registration = () => {

    const {addUser} = useContext(AppContext)

    const history = useHistory()

    const [formData, setFromData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        avatar: ''
    })

    const submitHandler = event => {
        event.preventDefault()
        if(!formData.fName.trim() || !formData.lName.trim() || !formData.email.trim() || !formData.password.trim()) return
        addUser(formData)
        history.push("/users")
    }


    const changeFieldHandler = event => {
        setFromData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="fName" value={formData.fName}
                               onChange={changeFieldHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lName" value={formData.lName}
                               onChange={changeFieldHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" value={formData.email}
                               onChange={changeFieldHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password" value={formData.password}
                               onChange={changeFieldHandler}/>
                    </div>
                    <div className="form-group mb-2">
                        <label>Avatar</label>
                        <input type="text" className="form-control" name="avatar" value={formData.avatar}
                               onChange={changeFieldHandler}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary w-100">Registration</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
