import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Collapse from '@mui/material/Collapse';

import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';



const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const inputChange = event => {
        setSearchInput(event.target.value);
        console.log(event.target.value);
    };

    const handleEnter = () => {
        setIsExpanded(true);
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setIsExpanded(false);
          console.log('User pressed Enter');
        }
      };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Valtieri
        </Typography>
        <Collapse in={isExpanded} timeout={300}>
            <InputBase
                variant="standard"
                onChange={inputChange}
                onKeyDown={handleKeyDown}
                value = {searchInput}
                size="small"
                placeholder="Search"
                inputProps={{
                    sx: {
                      color: 'white',
                    },
                  }}
            />
        </Collapse>
        <IconButton
            onClick={ handleEnter }
            color="inherit"
            sx={{ mr: 4 }}
        >
            <SearchIcon />
        </IconButton>
        <Button color="inherit" sx={{ mx: 4 }}>Home</Button>
        <Button color="inherit" sx={{ mx: 4 }}>Collection</Button>
        <Button color="inherit" sx={{ mx: 4 }}>Contact</Button>
        <IconButton color="inherit" sx={{ ml: 4, mr: 20 }}> <LocalMallIcon /> </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
