import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box,
         Grid,
         Typography,
         Button } from '@mui/material'

const MainCarousel = () => {
    var items = [
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
        {
            name: "Nike Air Force",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeAirForceWhite.png",
        },
        {
            name: "Nike Air Force",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeOrange.png",
        },
        {
            name: "Vans",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/VansBlack.png",
        },
    ]

    return (
        <Carousel
            interval={10000}
            animation='fade'
            duration={2500}
            indicators={false}
            height={'100vh'}
            navButtonsAlwaysInvisible={true}
        >
            {
                items.map( (item, i) => 
                    <Box key={i} sx={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#e1ebcf',
                    }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" height={'100vh'}>
                            <Grid item xs container>
                                <Grid item xs container 
                                      direction="column" 
                                      spacing={2} 
                                      justifyContent="center" 
                                      alignItems="center" 
                                >
                                    <Grid item xs>
                                        <Typography  variant="h4" component="div" color={'#ff3333'}>
                                            New Fashion Shoe
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography  variant="h1" component="div" color={'secondary'} sx={{fontWeight: 'bold'}}>
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item  xs>
                                        <Typography  variant="subtitle1" align="center" component="div" sx={{ width: "70%", mx: 'auto'}}>
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item  xs>
                                        <Button 
                                            variant="outlined" 
                                            size="large" 
                                            color = 'secondary'
                                            sx={{ 
                                                fontWeight: 'bold'
                                                }}
                                            >
                                                See More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    loading="lazy"
                                    width="100%" height="700"
                                    style={{ filter: 'drop-shadow( 30px 40px 10px #6cc6b2)',
                                             objectFit: "contain"
                                            }}
                                />
                            </Grid>
                        </Grid>
                    </Box> 
                )
            }
        </Carousel>
    )
}

export default MainCarousel;
