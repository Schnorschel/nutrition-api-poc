import React, { useState, useEffect } from 'react'
import axios from 'axios'
import data from '../data/parser.json'
import FoodItemPreview from './FoodItemPreview'

const SearchNutrition = () => {
  const [foodData, setFoodData] = useState()
  const [searchTerm, setSearchTerm] = useState()

  // prettier-ignore
  const apiURL = 'https://api.edamam.com/api/food-database/parser?app_id=c8c8984b&app_key=69c858de3c65fd201550f2079dfd68e6'

  const getFoodData = async () => {
    // const resp = await axios.get(apiURL + `&ingr=${searchFood}`)
    // if (resp.status != 200) {
    //   return
    // } else {
    // setSearchFood(resp.data.hints)
    // }
    console.log(data)
    setFoodData(data)
  }

  const searchForThisFood = () => {
    getFoodData()
  }

  return (
    // prettier-ignore
    <>
        <section className="searchBar">
          <section>Search for food:</section>{' '}
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />{' '}
          <button className="searchFood" onClick={searchForThisFood}>Search</button>
        </section>
        <section className="foodsCont">
          {typeof foodData !== 'undefined' && foodData.hints && foodData.hints.map((item, index) => {
            return <FoodItemPreview key={index}
                                    searchFor={data.text}
                                    foodId={item.food.foodId}
                                    foodLabel={item.food.label}
                                    foodCategory={item.food.category}
                                    foodContentsLabel={item.food.foodContentsLabel}
                                    foodBrand={item.food.brand}
                                    foodKcal={item.food.nutrients.ENERC_KCAL}
                                    foodProtein={item.food.nutrients.PROCNT}
                                    foodFat={item.food.nutrients.FAT}
                                    foodCarbs={item.food.nutrients.CHOCDF}
                                    foodFiber={item.food.nutrients.FIBTG}
                    />})
            }
            </section>
    </>
  )
}

export default SearchNutrition
