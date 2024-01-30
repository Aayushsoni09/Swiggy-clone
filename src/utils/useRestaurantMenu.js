import { useState,useEffect } from "react";

const useRestaurantMenu = (param) => {
    const [restaurantData,setRestaurantData] = useState({})
    const getMenu=async()=>{
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${param.id}`)
            const json=await data?.json()
            console.log("JSON" + json)
            if(json?.data){
                setRestaurantData(json.data);
                }
        }
        
        catch(error){
            console.log("error in fetching restaurant data",error)
        }
    }
    
  
    useEffect(() => {
      getMenu();
    }, []);

  return (restaurantData)

}


export default useRestaurantMenu