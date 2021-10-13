import {fbStore} from "../config/fbconfig"

import {doc, getDoc, setDoc, updateDoc, arrayUnion} from "firebase/firestore"

export const addTodoItem = async (title, uid) => {
    try {
        const docRef = doc(fbStore, 'todos', uid)
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            await updateDoc(docRef, {
                todos: arrayUnion({
                    title,
                    status: false
                })
            })
        } else {
            await setDoc(docRef, {todos: [{title, status: false}]})
        }

    } catch (error) {
        console.log(error.message)
    }
}

export const getAllTodos = async (uid) => {
    try {
        const docRef = doc(fbStore, 'todos', uid)
        const docData = await getDoc(docRef)
        return docData.exists() ? docData.data() : {todos: []}
    } catch (e) {
        console.log(e.message)
    }
}