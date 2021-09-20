import React, {useState} from 'react'

import CategoryList from "../categories/CategoryList"
import MealList from "../meals/MealList"

export const MealsContext = React.createContext()

const MealsNav = () => {

    const [currentCategory, setCategory] = useState(null)

    const changeCategory = (category) => {
        setCategory(category)
    }

    const searchCategory = (value, categories) => {
        const data = categories.find(item => item.strCategory === value)
        if (data !== undefined) {
            setCategory(data.strCategory)
        }
        else setCategory(null)
    }

    return (
        <>
            <MealsContext.Provider value={{
                changeCategory: changeCategory,
                searchCategory: searchCategory
            }}>
                <CategoryList/>
                {currentCategory ? <MealList category={currentCategory}/> : <h1>No meals today:)</h1>}
            </MealsContext.Provider>
        </>
    )
}

export default MealsNav