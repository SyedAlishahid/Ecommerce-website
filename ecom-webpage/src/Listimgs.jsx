import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useState } from 'react';
function Listimgs({src , type}) {

    const [heart , setHeart] = useState(false);

    function bgcolHandler(){
        setHeart(!heart)
    }

    const heartColor = heart ? "text-red-500" : "text-gray-300";

  return (
    <div className=''>
      <img src={src} className='rounded-lg ' />
      <p className='ml-8 mt-4 text-slate-700 font-semibold text-xl'>{type}</p>
        <FavoriteIcon 
        onClick={bgcolHandler}
         className={`${heartColor} `}
          />

        <Button sx={{
            margin: "1rem"
        }} 
         variant="contained"
         >Add to Cart
         </Button>
    </div>
  )
}

export default Listimgs
