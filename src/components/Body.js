import React, { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'


const Body = () => {
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchFilter,setSearchFilter] = useState("")

   const  getRestaurant = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTENING")
            const results = await data.json()
            if (results?.data) {
                setAllRestaurants(results?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredRestaurants(results?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
        } catch (error) {
            console.log("Error in fetching the api", error);
        }
       
    }
    useEffect(()=>{
        getRestaurant()
    },[])

  return (

    <>
        <div className='search-box'>
            <div className='rest-search'><input 
                type="text" 
                placeholder='Search restaurant or dishes...'
                value={searchFilter}
                onChange={(e)=>{setSearchFilter(e.target.value)}} 
                
            />
            <div className='searchIcon'>
                <input type="button" value="search" 
                    onClick={()=>{
                        const filteredData=allRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchFilter.toLowerCase())
                        })
                        setFilteredRestaurants(filteredData)
                    }
                        
                    }   
                />
            </div>
        </div>

        </div>
        <div className='restaurant-cards'>
            {filteredRestaurants?.map((restaurant)=>{
                return (<RestaurantCard {...restaurant.info} key={restaurant.info.id} />)
            })}
        </div>
    </>
    
  );
}

export default Body;