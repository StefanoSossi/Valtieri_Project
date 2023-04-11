import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography,
         Card,
         CardContent,
         Button } from '@mui/material';

const StyledCard = styled(Card)({
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: 'transform 0.4s',
    '&:hover': {
        transform: 'scale(1.3)',
    },
});


const NewCard = ( { items } ) => {

    return (
        <>
            {
                items.map( ( item, i ) => 
                    <StyledCard key={i} sx={{ m: 2.5}}>
                        <img 
                            src = {`${item.url}`} 
                            alt = {item.name} 
                            loading = 'lazy'
                            width= '100%'
                            height= '80%'
                            style = {{
                                objectFit: 'contain',
                                filter: 'drop-shadow( 10px 10px 3px #e1ebcf)',
                            }}
                        />
                            <CardContent sx = {{ 
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: '#fcfcfc'
                                }}
                            >
                                <Typography gutterBottom variant="h5" 
                                    color = 'secondary'
                                >
                                    {item.name}
                                </Typography>
                                <Button variant="outlined"  
                                    sx = {{
                                        width: '50%',
                                    }}
                                >
                                    Ver Más
                                </Button>
                            </CardContent>
                    </StyledCard>
                )
            }
        </>
    )
}

export default NewCard;