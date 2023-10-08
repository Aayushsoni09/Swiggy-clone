import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IMG_URL } from '../utils/constants'

const RestaurantMenu = () => {
    const [restaurantData,setRestaurantData] = useState({})
    const param =useParams()
    


    const getMenu=async()=>{
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${param.id}`)
            const json=await data?.json()
            if(json?.data){
                console.log(json.data) // returning the desired object
                setRestaurantData(await json.data);
                }
        }
        catch(error){
            console.log("error in fetching restaurant data",error)
        }
        
    }

    useEffect(()=>{
        console.log("getMenu called")
        getMenu()
    },[])
    if (Object.keys(restaurantData).length === 0) {
        return <div>Loading...</div>;
      }

  return (
    <div className='restaurant-menu-cover'>
        <div className='restaurant-head'>
            <div className='restaurant-head-image'>
                <img src={IMG_URL+restaurantData?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
            </div>
            <div className='restaurant-head-name'> {restaurantData?.cards[0]?.card?.card?.info?.name} </div>
        </div>
        <div className="restaurant-menu">menu</div>
    </div>
  )
}

export default RestaurantMenu