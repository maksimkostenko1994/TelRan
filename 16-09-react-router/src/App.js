import CategoryList from "./components/categories/CategoryList"
import MealList from "./components/meals/MealList"
import React, {useState} from 'react'

import "./App.scss"

export const MealsContext = React.createContext()

function App() {

    const [currentCategory, setCategory] = useState(null)

    const changeCategory = (category) => {
        setCategory(category)
    }


    return (
        <div className="app">
            <MealsContext.Provider value={{
                changeCategory: changeCategory
            }}>
                <CategoryList/>
            </MealsContext.Provider>
            {currentCategory ? <MealList/> : <h1>No meals today:)</h1>}
        </div>
    );
}

export default App;
