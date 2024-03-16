import PropTypes from 'prop-types'

function CartWantToCook({recipe, index, handlePreparingButton}){
    return(
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time_min} minutes</td>
            <td>{recipe.calorie} calories</td>
            <td><button onClick={()=>handlePreparingButton(recipe)} className="btn btn-accent rounded-3xl">Preparing</button></td>
        </tr>
    )
}

CartWantToCook.propTypes ={
    recipe: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePreparingButton: PropTypes.func.isRequired,
}

export default CartWantToCook