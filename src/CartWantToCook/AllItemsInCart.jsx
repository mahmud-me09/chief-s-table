import CartWantToCook from "./CartWantToCook"
import CartCurrentlyCooking from "../CartCurrentlyCooking/CartCurrentlyCooking"

function AllItemsInCart({recipeCart, cooking, handlePreparingButton}){
    let totalPreparationTime =0
    // const time = cooking.map(cook =>totalPreparationTime += cook.preparing_time_min)
    const time = cooking.reduce((p,c) =>p + c.preparing_time_min,0)
    const calorie = cooking.reduce((p,c) =>p + c.calories,0)
    console.log(time)
    return(
        <div className="border border-gray-300 rounded-2xl">
        <div>
            <h1 className="text-center font-bold py-4 text-xl"> Want to Cook: {recipeCart.length}</h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calorie</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {recipeCart.map((recipe,idx)=><CartWantToCook handlePreparingButton={handlePreparingButton} key={idx} index={idx} recipe={recipe} ></CartWantToCook>)}
                    </tbody>
                </table>
            </div>
        </div>

        <div>
        <h1 className="text-center font-bold py-4 text-xl"> Currently cooking: {cooking.length}</h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calorie</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {cooking.map((cook, idx)=><CartCurrentlyCooking key={idx} index={idx} cook={cook}></CartCurrentlyCooking>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = {time} minutes</td>
                            <td>Total Calorie = {calorie} calories</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    )
}
export default AllItemsInCart