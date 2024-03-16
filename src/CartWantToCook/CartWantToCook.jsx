function CartWantToCook({recipe, index, handlePreparing}){
    return(
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time_min} minutes</td>
            <td>{recipe.calorie} calories</td>
            <td><button className="btn btn-accent rounded-3xl">Preparing</button></td>
        </tr>

            
                        // <tr className="bg-base-200">
                        //     <th>{1}</th>
                        //     <td>Cy Ganderton</td>
                        //     <td>Quality Control Specialist</td>
                        //     <td>Blue</td>
                        // </tr>
    )
}

export default CartWantToCook