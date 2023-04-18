import React from 'react';

import { AppBar, Grid, Toolbar, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const BottomBar = () => {


  return (
    <AppBar position="static" color='black600'>
        <Toolbar>
            <Button color="lightWhite" sx={{ mx: 8, my:1 }}>
                <img
                    src="./images/Valtieri-removebg-preview_waifu2x_art_noise2_scale.png"
                    alt="Logo"
                    loading="lazy"
                    width="150%" height="200"
                />
            </Button>
            <Grid xs container 
                direction="column" 
                spacing={1} 
                justifyContent="center" 
                alignItems="left" 
            >
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        <strong>HOME</strong>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        <strong>GIFT CARDS</strong>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        <strong>STORE</strong>
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        <strong>MEMBERSHIP</strong>
                    </Button>
                </Grid>
            </Grid>
            <Grid xs container 
                direction="column" 
                spacing={1} 
                justifyContent="center" 
                alignItems="left" 
            >
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        Collection
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        New Shoes
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        Returns
                    </Button>
                </Grid>
            </Grid>
            <Grid xs container 
                direction="column" 
                spacing={1} 
                justifyContent="center" 
                alignItems="left" 
            >
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        Contact
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        Work with us
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button  variant="text" color="lightWhite">
                        News
                    </Button>
                </Grid>
            </Grid>
            <Grid xs container 
                direction="column" 
                spacing={1} 
                justifyContent="center" 
                alignItems="left" 
            >
                <Grid item xs>
                    <IconButton color="lightWhite" sx={{ m: 2 }}> <FacebookIcon /> </IconButton>
                </Grid>
                <Grid item xs>
                    <IconButton color="lightWhite" sx={{ m: 2 }}> <InstagramIcon /> </IconButton>
                </Grid>
            </Grid>
            <Grid xs container 
                direction="column" 
                spacing={1} 
                justifyContent="center" 
                alignItems="left" 
            >
                <Grid item xs>
                    <IconButton color="lightWhite" sx={{ m: 2 }}> <TwitterIcon /> </IconButton>
                </Grid>
                <Grid item xs>
                    <IconButton color="lightWhite" sx={{ m: 2 }}> <EmailIcon /> </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );
}

export default BottomBar;