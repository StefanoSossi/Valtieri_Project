
import React from 'react';
import { Box } from '@mui/material'
import StoreCard from '../StoreCard/StoreCard';

let items = [
    {
        name: "Adidas Running",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/AdidasPinkWhite.png",
        category: "Zapatillas",
        gen: "Mujer",
    },
    {
        name: "Adidas All Stars",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/AdidasWhite.png",
        category: "Zapatillas",
        gen: "Hombre",
    },
    {
        name: "Converse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/ConverseBlack.png",
        category: "Zapatillas",
        gen: "Hombre",
    },
    {
        name: "Nike Running",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/NikeAirForceRedBlack.png",
        category: "Zapatillas",
        gen: "Hombre",
    },
    {
        name: "Nike Air Force",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/NikeAirForceWhite.png",
        category: "Zapatillas",
        gen: "Hombre",
    },
    {
        name: "Nike Air Jordan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "./images/NikeOrange.png",
        category: "Zapatillas",
        gen: "Hombre",
    },
    
]

const StoreSection = () => {

  return (
    <Box sx={{ m: 4, p: 2, 
               backgroundColor: '#fafafa', 
               borderRadius: '10px', 
               display: 'flex',
               flexDirection: 'row'
            }}
    >
       <StoreCard items={items} ></StoreCard>
    </Box>
  );
}

export default StoreSection;