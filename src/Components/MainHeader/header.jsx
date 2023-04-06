import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Brand
        </Typography>
        <Button color="inherit" startIcon={<SearchIcon />}></Button>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Collection</Button>
        <Button color="inherit">Contact</Button>
        <IconButton color="inherit"> <LocalMallIcon /> </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

// how to center an icon on a Button from mui?