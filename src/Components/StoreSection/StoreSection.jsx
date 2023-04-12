
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
    <Box sx={{ p: 2, 
               backgroundColor: '#1a9365', 
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap',
               my:8,
               justifyContent: 'center',
               alignItems: 'center' 
            }}
    >
       <StoreCard items={items} ></StoreCard>
    </Box>
  );
}

export default StoreSection;