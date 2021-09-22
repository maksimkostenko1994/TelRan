import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
import Users from "./components/users/Users";
import Navigation from "./components/navigation/Navigation";
import Registration from "./components/registration/Registration"
import UserProfile from "./components/users/UserProfile"
import React, {useState} from "react"
import {
    getUsers,
    getCurrentUser,
    login, logout,
    setCurrentUserToLocalStorage,
    setUsersToLocalStorage
} from "./store/usersData"

import {getAlbums, setAlbumsToLocalStorage} from "./store/albumsData"

import Login from "./components/login/Login";

export const AppContext = React.createContext()

function App() {

    const [users, setUsers] = useState(getUsers())

    const [currentUser, setCurrentUser] = useState(getCurrentUser())

    const addUser = user => {
        const isUserExist = users.some(u => u.email === user.email)
        if (!isUserExist) {
            const newUser = {...user, id: Date.now()}
            const usersArray = [...users, newUser]
            setUsers(usersArray)
            setUsersToLocalStorage(usersArray)
            setCurrentUserToLocalStorage(newUser.id)
            return true
        }
        return false
    }

    const changeCurrentUser = (currentUser) => {
        const idUser = login(currentUser)
        if (idUser) {
            setCurrentUser(idUser)
            setCurrentUserToLocalStorage(idUser)
            return true
        } else {
            return false
        }
    }

    const getCurrentUserObj = () => {
        return users.find(item => item.id === currentUser)
    }

    const getUserNameById = (id) => {
        return users.find(user => user.id === id)
    }

    const logoutUser = () => {
        setCurrentUser(null)
        logout()
    }

    const updateUser = user => {
        const usersArr = [...users]
        const index = usersArr.findIndex(item => item.id === user.id)
        usersArr[index] = {...user}
        setUsers(usersArr)
        setUsersToLocalStorage(usersArr)
    }

    const [albums, setAlbums] = useState(getAlbums())

    const addNewAlbum = album => {
        const albumsArr = [...albums, {...album, id: Date.now()}]
        setAlbums(albumsArr)
        setAlbumsToLocalStorage(albumsArr)
    }

    const currentUsersAlbums = () =>  albums.filter(item => item.userId === currentUser)


    return (
        <AppContext.Provider value={{
            users,
            addUser,
            changeCurrentUser,
            currentUser,
            getUserNameById,
            logoutUser,
            getCurrentUserObj,
            updateUser,
            addNewAlbum,
            currentUsersAlbums
        }}>
            <Navigation/>
            <Switch>
                <Route path="/user/:id" component={UserProfile}/>
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
