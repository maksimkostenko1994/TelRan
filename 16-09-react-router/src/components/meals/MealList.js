import {useState, useEffect} from "react"
import Store from "../../store/Store"

import "../../sass/MealsList.scss"

import Meal from "./Meal"

const MealList = ({category}) => {

    const [loading, setLoading] = useState(true)
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        Store.getMealsByCategory(category)
            .then(data => {
                console.log(data)
                setLoading(false)
                setMeals(data.meals)
            })
            .catch(error => new Error(error.message))
    }, [category])

    return (
        <>
            <h1>{category}</h1>
            <ul className="meals-list">
                {loading ? <h1>Chefs didn't prepare any food:( Sorry...</h1> : meals.map(meal => <Meal key={meal.idMeal}
                                                                                                       meal={meal}/>)}
            </ul>
        </>
    )
}

export default MealList
