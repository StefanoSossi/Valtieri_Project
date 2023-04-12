
import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography,
         Card,
         CardContent } from '@mui/material';

const StyledCard = styled(Card)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '50vh',
    width: '30vw',
    cursor: 'pointer',
});

const hanldeClick = () => {
    console.log('click');
}

const NewCard = ( { items } ) => {

    return (
        <>
            {
                items.map( ( item, i ) => 
                    <StyledCard key={i} sx={{ m: 0.8 }} onClick={hanldeClick}>
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
                                <Typography gutterBottom variant="subtitle2" 
                                    color = 'secondary'
                                >
                                    {item.category} - {item.gen}
                                </Typography>
                            </CardContent>
                    </StyledCard>
                )
            }
        </>
    )
}

export default NewCard;