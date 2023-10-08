import React from 'react'

const Shimmer = () => {
        return(
            <>
            <div className='restaurant-cards'>
                {
                    Array(10).fill("").map((index,e)=> <div key={index} className='shimmer-card'></div> )
                }
            </div>   
            </>
        )
}
export default Shimmer