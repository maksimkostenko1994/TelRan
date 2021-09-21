import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
import Users from "./components/users/Users";
import Navigation from "./components/navigation/Navigation";
import Registration from "./components/registration/Registration"
import React, {useState} from "react"
import usersArray, {
    getCurrentUser,
    login, logout,
    setCurrentUserToLocalStorage,
    setUsersToLocalStorage
} from "./store/usersData"

import Login from "./components/login/Login";

export const AppContext = React.createContext()

function App() {

    const [users, setUsers] = useState(usersArray)

    const [currentUser, setCurrentUser] = useState(getCurrentUser())
    const [error, setError] = useState(null)

    const addUser = user => {
        const newUser = {...user, id: Date.now()}
        const usersArray = [...users, newUser]
        setUsers(usersArray)
        setUsersToLocalStorage(usersArray)
    }

    const changeCurrentUser = (currentUser) => {
        const idUser = login(currentUser)
        if (idUser) {
            setCurrentUser(idUser)
            setCurrentUserToLocalStorage(idUser)
        } else {
            setError('login or password is wrong')
        }
    }

    const getUserNameById = (id) => {
        return users.find(user => user.id === id)
    }

    const logoutUser = () => {
        setCurrentUser(null)
        logout()
    }

    return (
        <AppContext.Provider value={{
            users,
            addUser,
            changeCurrentUser,
            currentUser,
            getUserNameById,
            logoutUser
        }}>
            <Navigation/>
            <Switch>
                <Route path="/users" component={Users}/>
                <Route path="/albums" component={Albums}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/" component={Home}/>
            </Switch>
        </AppContext.Provider>
    );
}

export default App;
