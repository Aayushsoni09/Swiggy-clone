import React, { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import {data} from '../utils/swiggyData'
import Button from '@mui/material/Button';
const Body = () => {
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchFilter,setSearchFilter] = useState("")
    // const data = JSON.parse(jsonData)
    
   const  getRestaurant =  () => {
         try {
             if (data?.data) {
                setAllRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                
            }
        } catch (error) {
            console.log("Error in fetching the api", error);
        }
       
    }
    useEffect(()=>{
        getRestaurant()
    },[])
    
    if(!allRestaurants) return null;    

  return allRestaurants?.length === 0 ? (
    <Shimmer/>
  ):(

    <>
        <div className='search-box'>
            <div className='rest-search'><input 
                type="text" 
                placeholder='Search restaurant or dishes...'
                value={searchFilter}
                onChange={(e)=>{setSearchFilter(e.target.value)}} 
                
            />
            <div className='searchIcon'>
                <Button 
                onClick={()=>{
                            const filteredData=allRestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchFilter.toLowerCase()))
                                setFilteredRestaurants(filteredData)
                                
                            }}
                sx={{color:'orangered', borderColor:"orangered", marginTop:"20px" , width:"100%", height:"30px"}}            
                            >Search</Button> 
                      
                
            </div>
        </div>
        </div>
        
        <div className='restaurant-cards'>
        {
            filteredRestaurants.length === 0 
            ? console.log('No restaurants found')
            : filteredRestaurants?.map((restaurant, index) => {
            return (
                <Link to={"/restaurant/" + restaurant?.info?.id } key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info}  />
                </Link>
            )
            })
        }
        </div>
    </>
  
  );
}

export default Body;