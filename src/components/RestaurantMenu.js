import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IMG_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'


const RestaurantMenu = () => {
    
    const [menuData,setMenuData] = useState([])
    const param =useParams()
    const restaurantMenuData = useRestaurantMenu(param)

    useEffect(() => {
        if (Object.keys(restaurantMenuData).length !== 0) {
          const items = restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
          const menuItems = items?.slice(1, -2)?.map((item) => item.card.info.name);
          setMenuData(menuItems);
        }
      }, [restaurantMenuData]);
    
      if (Object.keys(restaurantMenuData).length === 0) {
        return <Shimmer/>;
      }

  return (
    <div className='restaurant-menu-cover'>
        <div className='restaurant-head'>
            <div className='restaurant-head-image'>
                <img src={IMG_URL+restaurantMenuData?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
            </div>
            <div className='restaurant-head-name'> {restaurantMenuData?.cards[0]?.card?.card?.info?.name} </div>
        </div>
        <div className="restaurant-menu">
           <ul>
            <li>
            {menuData}
            </li>
           
            </ul>
</div>
    </div>
  )
}
//  console.log(items.card.card.itemCards.card.card.info.name)
export default RestaurantMenu