import "../../sass/Meal.scss"

const Meal = ({meal}) => {

    return(
        <li className="meal-item">
            <img src={meal.strMealThumb} alt={meal.strMealThumb}/>
            <h3>{meal.strMeal}</h3>
        </li>
    )
}

export default Meal
