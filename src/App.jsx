import Header from './Header/Header'
import './App.css'
import Banner from './Banner/Banner'
import RecipyCards from './recipyCards/RecipyCards'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <div>
        <h3 className='text-center text-4xl font-semibold pt-20'>Our Recipes</h3>
        <p className='text-center py-5'>Explore our treasure trove of mouthwatering recipes, meticulously crafted to tantalize your taste buds. <br /> Get ready to embark on a culinary journey!</p>
      </div>
      <div className='flex'>
        <div className='w-2/3'>
          <RecipyCards></RecipyCards>
        </div>
        <div className='w-1/3'>
          
        </div>
      </div>
    </div>
  )
}

export default App
