import * as React from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
export default function Products({ src , rate }) {

    return (
        <div className='mt-10 text-center grid grid-cols-1 items-center sm:ml-8'>
            <img src={src} className='rounded-lg h-90 '/>
            <Rating name="half-rating-read" defaultValue={2.5} precision={rate} readOnly sx={{
                margin: "1rem",
                marginLeft: "3.5rem"
            }} />
            <div className='flex mr-2'>
            <p className='p-2 font-semibold'>"Premium Quality Shirts"</p>
            <Button size="large" variant="contained" color="success" sx={{
                width: "200px",
            }}>
                Add to Cart
            </Button>
            </div>
        </div>
    )
}