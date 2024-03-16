function RecipyCard({recipyCard}){
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time_min, calories} = recipyCard
    return(
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <h4 className="text-left">ingredients:</h4>
                    <ul className="list-disc pl-5">
                        {ingredients.map((ingredient) => <li>{ingredient}</li>)}
                    </ul>
                    <div className="card-actions">
                        <button className="btn btn-primary rounded-2xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecipyCard