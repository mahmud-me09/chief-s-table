import { useState } from "react"
import CartWantToCook from "./CartWantToCook"
import CartCurrentlyCooking from "../CartCurrentlyCooking/CartCurrentlyCooking"

function AllItemsInCart({recipeCart}){

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
                    {recipeCart.map((recipe,idx)=><CartWantToCook key={idx} index={idx} recipe={recipe} ></CartWantToCook>)}
                    </tbody>
                </table>
            </div>
        </div>

        <div>
        <h1 className="text-center font-bold py-4 text-xl"> Currently cooking: {4}</h1>
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
                    <CartCurrentlyCooking></CartCurrentlyCooking>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = {30} minutes</td>
                            <td>Total Calorie = {600} calories</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    )
}
export default AllItemsInCart