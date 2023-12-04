import { useState,useEffect } from "react";

const useRestaurantMenu = (param) => {
    const [restaurantData,setRestaurantData] = useState({})
    useEffect(() => {
        getMenu();
      }, []);

    const getMenu=async()=>{
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${param.id}`)
            const json=await data?.json()
            if(json?.data){
                setRestaurantData(await json.data);
                }
        }
        
        catch(error){
            console.log("error in fetching restaurant data",error)
        }
    }


  return (restaurantData)
}

export default useRestaurantMenu