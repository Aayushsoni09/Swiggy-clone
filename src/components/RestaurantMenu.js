import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import Button from '@mui/material/Button';
import {IMG_URL} from '../utils/constants'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';




const RestaurantMenu = () => {
    const [menuData,setMenuData] = useState([])
    const param =useParams()
    const restaurantMenuData = useRestaurantMenu(param)
    const dispatch=useDispatch()
 
    useEffect(() => {
        if (Object.keys(restaurantMenuData).length !== 0) {
          const items = restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
          const menuItems = items?.slice(1, -2)?.map((item) => item.card.info);
          setMenuData(menuItems);
        }
      }, [restaurantMenuData]);
    
      if (Object.keys(restaurantMenuData).length === 0) {
        return <Shimmer/>;
      }

      const handleClick=(menuItem)=>{
        dispatch(addItem(menuItem))
      }
  
  return (
    <div className='restaurant-menu-cover'>
        <div className='restaurant-head'>
            <div className='restaurant-head-image'>
                <img src={IMG_URL+restaurantMenuData?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
            </div>
            <div>
            <div className='restaurant-head-name'>
              <h1>{restaurantMenuData?.cards[0]?.card?.card?.info?.name}</h1>
                </div>
            </div>
          <div className='restaurant-avg-rating'>{     
          <Rating sx={{'& .MuiRating-iconFilled': { color: 'orangered' },}}  name="read-only" value={restaurantMenuData?.cards[0]?.card?.card?.info?.avgRatingString} readOnly />}
          </div> 
        

        <div className='restaurant-cuisines'><h2>{`Cuisines : ${restaurantMenuData?.cards[0]?.card?.card?.info?.cuisines} `}</h2></div>
        <div className='restaurant-area-name'><h3>Area : {restaurantMenuData?.cards[0]?.card?.card?.info?.areaName}</h3></div>
        <div className='restaurant-cost-for-two'><h3>Avg cost : {restaurantMenuData?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3></div>
        </div>
        <div className="restaurant-menu">
       
        {menuData?.map((menuItem)=>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="menuitem" src={IMG_URL + menuItem.imageId} />
            <IconButton>
              <Button 
              sx= {{color:'orangered', borderColor:"orangered"}} onClick={()=>handleClick(menuItem)}>Add</Button>
            </IconButton>
          </ListItemAvatar>
          <ListItemText
            primary={menuItem.name}
            secondary={
              <React.Fragment>
                {menuItem.description}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )}

  </div>
</div>
  )
}
//  console.log(items.card.card.itemCards.card.card.info.name)
export default RestaurantMenu