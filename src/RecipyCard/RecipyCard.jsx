import { FaRegClock,FaGripfire  } from 'react-icons/fa';
import PropTypes from 'prop-types'

function RecipyCard({recipyCard, HandleWantToCookButton}){
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time_min, calories} = recipyCard
    return(
        <div>
            <div className="card w-[350px] border border-gray-300 bg-base-100 h-[680px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="border-b border-gray-300">{short_description}</p>
                    <h4 className="text-left font-medium  pt-4">Ingredients: {ingredients.length}</h4>
                    <ul className="list-disc pl-5 pb-4 border-b border-gray-300">
                        {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
                    </ul>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <FaRegClock /> {preparing_time_min} minutes
                        </div>
                        <div className='flex gap-2'>
                            <FaGripfire /> {calories} calories
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>HandleWantToCookButton(recipyCard)} className="btn btn-accent rounded-3xl mt-4">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

RecipyCard.propTypes ={
    recipyCard: PropTypes.object.isRequired,
    HandleWantToCookButton: PropTypes.func.isRequired,
}

export default RecipyCard