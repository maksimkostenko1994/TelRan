const users = JSON.parse(localStorage.getItem('users')) || []

export default users

export const setUsersToLocalStorage = users => localStorage.setItem('users', JSON.stringify(users))

export const setCurrentUserToLocalStorage = id => localStorage.setItem("currentUserId", JSON.stringify(id))

export const getCurrentUser = () => JSON.parse(localStorage.getItem("currentUserId"))

export const logout = () => localStorage.removeItem('currentUserId')

export const login = (currentUser) => {
    const user = users.find(item => item.email === currentUser.email)
    return user.password === currentUser.password ? user.id : null
}