import Header from './Header/Header'
import './App.css'
import Banner from './Banner/Banner'
import RecipyCards from './recipyCards/RecipyCards'
import CartWantToCook from './CartWantToCook/CartWantToCook'

function App() {

  function HandleWantToCookButton(){
    
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <div>
        <h3 className='text-center text-4xl font-semibold pt-20'>Our Recipes</h3>
        <p className='text-center py-5'>Explore our treasure trove of mouthwatering recipes, meticulously crafted to tantalize your taste buds. <br /> Get ready to embark on a culinary journey!</p>
      </div>
      <div className='flex pb-10'>
        <div className='w-7/12'>
          <RecipyCards></RecipyCards>
        </div>
        <div className='w-5/12'>
          <CartWantToCook></CartWantToCook>
        </div>
      </div>
    </div>
  )
}

export default App
