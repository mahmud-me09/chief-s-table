import { useState } from "react"
import RecipyCard from "../RecipyCard/RecipyCard"
import { useEffect } from "react"

function RecipyCards({HandleWantToCookButton}){
    const [recipyCards, setRecipyCards] = useState([])
    useEffect(()=>{
        fetch('./recipy.json')
        .then(response => response.json())
        .then(data => setRecipyCards(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className='flex flex-wrap gap-4'>
          {recipyCards.map((recipyCard, idx) => (
            <RecipyCard 
              key={idx} 
              recipyCard={recipyCard}
              HandleWantToCookButton={HandleWantToCookButton}
            ></RecipyCard>
          ))}
        </div>
      )
}
export default RecipyCards