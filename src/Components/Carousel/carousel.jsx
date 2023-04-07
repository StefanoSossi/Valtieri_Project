import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box,Grid,Typography,Button   } from '@mui/material'

const MainCarousel = () => {
    var items = [
        {
            name: "Adidas",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/AdidasPinkWhite.png",
        },
        {
            name: "Adidas",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/AdidasWhite.png",
        },
        {
            name: "Converse",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/ConverseBlack.png",
        },
        {
            name: "Nike Air Force 1",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeAirForceRedBlack.png",
        },
        {
            name: "Nike Air Force 1",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeAirForceWhite.png",
        },
        {
            name: "Nike Air Force 1",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/NikeOrange.png",
        },
        {
            name: "Vans",
            description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            url: "./images/VansBlack.png",
        },
    ]

    return (
        <Carousel
            //NextIcon={<RandomIcon/>}
            //PrevIcon={<RandomIcon/>}
            interval={10000}
            animation='fade'
            duration={2500}
            indicators={false}
            height={'100vh'}
        >
            {
                items.map( (item, i) => 
                    <Box key={i} sx={{
                        width: '100vw',
                        height: '60vh',
                        backgroundColor: '#b6a2d8',
                    }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs container>
                                <Grid item xs container direction="column" spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item xs>
                                        <Typography  variant="h4" component="div">
                                            New Fashion Shoe
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography  variant="h1" component="div">
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item  xs>
                                        <Typography  variant="subtitle1" align="center" component="div">
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item  xs>
                                        <Button variant="contained" size="large">
                                            See More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    src={item.url}
                                    alt="Logo"
                                    loading="lazy"
                                    width="500" height="500"
                                    style={{ filter: 'drop-shadow( 30px 40px 10px #e1ebcf)'}}
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
