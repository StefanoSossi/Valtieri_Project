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
        <>
            <Typography  variant="h3" component="div" color={'#ff3333'}>
                <strong>New Fashion Shoe</strong>
            </Typography>
            <Typography  variant="h6" component="div" color={'secondary'}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Typography>
            <Box sx={{
                    display: 'flex',
                    //alignContent: 'center',
                    justifyContent: 'center',
                    my:8,
                    backgroundColor: 'primary',
                }}
            >
                <NewCard items={items} ></NewCard>
                
            </Box>
        </>
    )
}

export default NewCollection;