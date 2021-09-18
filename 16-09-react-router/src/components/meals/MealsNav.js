import React, {useState} from 'react'

import CategoryList from "../categories/CategoryList"
import MealList from "../meals/MealList"

export const MealsContext = React.createContext()

const MealsNav = () => {

    const [currentCategory, setCategory] = useState(null)

    const changeCategory = (category) => {
        setCategory(category)
    }

    return (
        <>
            <MealsContext.Provider value={{
                changeCategory: changeCategory
            }}>
                <CategoryList/>
            </MealsContext.Provider>
            {currentCategory ? <MealList category={currentCategory}/> : <h1>No meals today:)</h1>}
        </>
    )
}

export default MealsNav