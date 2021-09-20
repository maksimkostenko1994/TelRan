import "../../sass/Category.scss"

import {MealsContext} from "../meals/MealsNav"

import {useContext} from "react"

const Category = ({category}) => {

    const {changeCategory} = useContext(MealsContext)

    return(
        <li className="category-item" onClick={()=>changeCategory(category.strCategory)}>
            <img src={category.strCategoryThumb} alt={category.strCategoryThumb}/>
            <h1>{category.strCategory}</h1>
        </li>
    )
}

export default Category