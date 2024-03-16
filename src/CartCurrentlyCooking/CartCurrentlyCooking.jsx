function CartCurrentlyCooking({cook, index}){
    return(
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{cook.recipe_name}</td>
            <td>{cook.preparing_time_min} minutes</td>
            <td>{cook.calories} calories</td>
        </tr>
    )
}

export default CartCurrentlyCooking
