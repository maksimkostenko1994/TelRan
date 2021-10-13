import {fbAuth} from "../config/fbconfig"

export const login = async (email, password) => {
    try {
        const response = await fbAuth.signInWithEmailAndPassword(email, password)
        console.log(response)
        localStorage.setItem('user_id', response.user.uid)
    } catch (error) {
        await Promise.reject(error)
    }
}