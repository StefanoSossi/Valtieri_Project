import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography,
         Card,
         CardMedia,
         CardContent } from '@mui/material';

const StyledCard = styled(Card)({
    width: '20%',
    transition: 'transform 0.4s ease-in-out',
    '&:hover': {
        transform: 'scale(1.3)',
    },
});


const NewCard = ( { items } ) => {

    return (
        <>
            {
                items.map( ( item, i ) => 
                    <StyledCard key={i}>
                        <img 
                            src={`${item.url}`} 
                            alt={item.name} 
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '80%',
                                objectFit: 'contain',
                            }}
                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" 
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    Card Content
                                </Typography>
                            </CardContent>
                    </StyledCard>
                )
            }
        </>
    )
}

export default NewCard;