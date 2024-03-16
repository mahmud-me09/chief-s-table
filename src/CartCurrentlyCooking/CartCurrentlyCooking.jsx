function CartCurrentlyCooking({cook, index}){
    console.log(cook)
    return(
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{cook.recipe_name}</td>
            <td>{cook.preparing_time_min}</td>
            <td>{cook.calorie}</td>
        </tr>
    )
}

export default CartCurrentlyCooking
