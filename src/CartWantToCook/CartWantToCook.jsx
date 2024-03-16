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

export default CartWantToCook