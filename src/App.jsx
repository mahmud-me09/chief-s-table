import Header from './Header/Header'
import './App.css'
import Banner from './Banner/Banner'
import RecipyCards from './recipyCards/RecipyCards'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AllItemsInCart from './CartWantToCook/AllItemsInCart'

function App() {
  const [recipeCart, setRecipeCart] = useState([])
  
  

  function HandleWantToCookButton(recipe){
    if(!recipeCart.find(ri => ri.recipe_name === recipe.recipe_name)){
      const recipeItemsAdded = [...recipeCart, recipe]
      setRecipeCart(recipeItemsAdded)
      toast.success('Recipe Added.')
    }
    else{
      toast.error('Already Added, Choose another')
    }
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <div>
        <h3 className='text-center text-4xl font-semibold pt-20'>Our Recipes</h3>
        <p className='text-center py-5'>Explore our treasure trove of mouthwatering recipes, meticulously crafted to tantalize your taste buds. <br /> Get ready to embark on a culinary journey!</p>
      </div>
      <div className='block lg:flex mb-10'>
        <div className='w-full lg:w-7/12'>
          <RecipyCards HandleWantToCookButton={HandleWantToCookButton}></RecipyCards>
        </div>
        <div className='w-full lg:w-5/12'>
          <AllItemsInCart recipeCart={recipeCart}></AllItemsInCart>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
