import { categories, mealData } from "../data/data" 
import { useState } from "react"

const Meal = () => { 
    const [foods,setFoods]=useState(mealData) 
    const filterCateogry=(category)=>{ 
      console.log(category)
        setFoods(
            mealData.filter((item)=>{  
              console.log(item.category); 
              console.log(item.price)
                return item.category === category
            })
        )
    }
  return (
    <div className="max-w-[1520px] m-auto py-12 px-4">
  <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>  
  <div className="flex flex-col lg:flex-row justify-center "> 
  <div className="flex justify-center md:justify-center">
    <button  onClick={()=>setFoods(mealData)} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">All</button>
    <button onClick={()=>filterCateogry("pizza")} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Pizza</button>
    <button onClick={()=>filterCateogry("chicken")} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Chicken</button>
    <button onClick={()=>filterCateogry("salad")} className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">Salad</button>
  </div>
    </div> 
  <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-14 py-4">
    {
        foods.map((item)=>{
            return (
                <div className="border-none hover:scale-105 duration-300" key={item.id}> 
                <img src={item.image} className="w-full h-[200px] object-cover rounded-lg" alt={item.name}/> 
                <div className="py-2 px-4 flex justify-between">
                <span className="font-bold">{item.name} -</span> 
                <span>{item.price}</span> 
                <button className="mx-2 my-2">Add To Cart</button>
                </div>
                </div>
            )
        })
    }
  </div>
    </div>
  )
}

export default Meal