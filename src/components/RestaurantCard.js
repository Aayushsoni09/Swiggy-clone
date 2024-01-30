import React from 'react'
import { IMG_URL } from '../utils/constants'
import Rating from '@mui/material/Rating';
const Restaurant_Card = (props) => {
  return (
    <div className='card'>
        <div className='rest-image'>
        <img 
          src={IMG_URL+props.cloudinaryImageId}
          alt="restaurant-dish"
        />
        </div>
        <div className='rest-name'><h2>{props.name}</h2></div>
        <div className='rest-rating'><p><Rating   
        sx={{'& .MuiRating-iconFilled': { color: 'orangered' },}} 
        name="read-only" value={props.avgRating} readOnly /></p></div>
        <div className='rest-cuisines'><p>{props.cuisines.join(' ,')}</p></div>
        <div className='rest-area'><p>{props.areaName}</p></div>

        
    </div>
  )
}

export default Restaurant_Card