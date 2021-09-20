import Category from "./Category"
import "../../sass/CategoryList.scss"

import {useState, useEffect, useContext} from 'react'

import Store from "../../store/Store"

import {MealsContext} from "../meals/MealsNav"

const CategoryList = () => {

    const {searchCategory} = useContext(MealsContext)

    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [value, setValue] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        Store.getAllCategories()
            .then(data => {
                setLoading(false)
                setCategories(data.categories)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
    }, [])

    const inputHandler = (event) => {
        setValue(event.target.value)
    }

    return (
        <ul className="category-list">
            <div className="search-box">
                <input onChange={(event) => inputHandler(event)} type="text" placeholder="type text"/>
                <button onClick={() => searchCategory(value, categories)}>search</button>
            </div>

            {loading ? <h1>Loading...</h1> : categories.map(category => <Category key={category.idCategory}
                                                                                  category={category}/>)}
        </ul>
    )
}

export default CategoryList