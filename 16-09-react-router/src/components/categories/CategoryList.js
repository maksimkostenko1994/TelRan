import Category from "./Category"
import "../../sass/CategoryList.scss"

import {useState, useEffect} from 'react'

import Store from "../../store/Store"

const CategoryList = () => {

    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        Store.getAllCategories()
            .then(data => {
                console.log(data)
                setLoading(false)
                setCategories(data.categories)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }, [])

    const renderCategories = () => {
        return loading ? <h1>Loading...</h1> : categories.map(category => <Category key={category.idCategory}
                                                                                    category={category}/>)
    }

    return (
        <ul className="category-list">
            {renderCategories()}
        </ul>
    )
}

export default CategoryList