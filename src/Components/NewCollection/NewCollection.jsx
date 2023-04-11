import React from 'react';
import { Box,
         Typography} from '@mui/material';
import NewCard from '../NewCard/NewCard';

const NewCollection = () => {
    let items = [
        {
            name: "Adidas",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/AdidasPinkWhite.png",
        },
        {
            name: "Adidas",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/AdidasWhite.png",
        },
        {
            name: "Converse",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/ConverseBlack.png",
        },
        {
            name: "Nike Air Force",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeAirForceRedBlack.png",
        },
    ]

    return (
        <Box sx={{ m: 4, p: 2, backgroundColor: '#fafafa', borderRadius: '10px'}}>
            <Typography  variant="h3" component="div" sx={{ color: '#483c32' }} >
                <strong>New Fashion Shoe</strong>
            </Typography>
            <Typography  variant="h6" component="div" sx={{ color: '#282a2d' }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{
                    display: 'flex',
                    //alignContent: 'center',
                    justifyContent: 'center',
                    my:8,
                }}
            >
                <NewCard items={items} ></NewCard>
                
            </Box>
        </Box>
    )
}

export default NewCollection;