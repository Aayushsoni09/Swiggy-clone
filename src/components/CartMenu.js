import React from 'react'
import {IMG_URL} from '../utils/constants'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
const CartMenu = ({name,price,description,imageId}) => {
  return (
    <>
 <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="menuitem" src={IMG_URL + imageId} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                {description} 
              </React.Fragment>
            }
          />
          <h4>Rs. {price?(price/100):(249)}</h4>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  )
}

export default CartMenu