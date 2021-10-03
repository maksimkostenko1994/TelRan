import {bookActionTypes} from "./bookActionTypes";
import {rootActionTypes} from "../rootActionTypes";
import {errorActionTypes} from "../errors/errorActionTypes";
import {firestore} from "../../config/fbConfig";

export const addBook = (book) => {
    return async dispatch => {
        dispatch({type: rootActionTypes.loading})
        try {
            await firestore.collection(`books`).add(book)
            dispatch({
                type: bookActionTypes.add,
                payload: book
            })
        } catch (error) {
            dispatch({
                type: errorActionTypes.add_book,
                payload: {
                    error: error.message
                }
            })
        }
    }
}

export const removeBook = id => {
    return async dispatch => {
        try {
            const books = await firestore.collection('books')
            const newBooks = books.filter(item => item.id !== id)
            console.log(newBooks)
            dispatch({type: bookActionTypes.remove, payload: newBooks})
        } catch (error) {
            dispatch({
                type: errorActionTypes.del_book,
                payload: {
                    error: error.message
                }
            })
        }
    }

}