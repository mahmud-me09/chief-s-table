function CartWantToCook(){

    return(
        <div  className="border border-gray-300 rounded-2xl">
            <div>
                <h1 className="text-center font-bold py-4 text-xl"> Want to Cook: {4}</h1>
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
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn btn-accent rounded-3xl">Preparing</button></td>
                        </tr>
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
                        <tr className="bg-base-200">
                            <th>{1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
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

export default CartWantToCook