const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const POST_URL = `https://jsonplaceholder.typicode.com`

export default class Store {

    static getAllCategories() {
        return fetch(`${BASE_URL}/categories.php`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                throw new Error(error.message)
            })
    }

    static getMealsByCategory(category) {
        return fetch(`${BASE_URL}/filter.php?c=${category}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                throw new Error(error.message)
            })
    }

    static getAllPosts() {
        return fetch(`${POST_URL}/posts`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                throw new Error(error.message)
            })
    }

    static getPostById(id) {
        return fetch(`${POST_URL}/posts/${id}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                throw new Error(error.message)
            })
    }

    static getUserById(id) {
        return fetch(`${POST_URL}/users/${id}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                throw new Error(error.message)
            })
    }
}