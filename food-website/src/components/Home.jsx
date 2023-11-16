import React from 'react' 
import Featured from './Featured'
import Delivery from './Delivery'
import TopPicks from './TopPicks'
import Meal from './Meal'
import Cateogries from './Cateogries'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const Home = () => {
  return (
   <> 
   <Featured/>
   <Delivery />
   <TopPicks />
   <Meal />
   <Cateogries />
   <NewsLetter/> 
   <Footer/>  
   </>
  )
}

export default Home