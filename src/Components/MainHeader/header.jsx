import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { InputBase } from '@mui/material';

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
    <AppBar position="static" color='lightPurple'>
      <Toolbar>
        <Button color="lightWhite" sx={{ mx: 8, my:1 }}>
          <img
              src="./images/ValtieriLogo-removebg-preview.png"
              alt="Logo"
              loading="lazy"
              width="60" height="60"
              style={{ filter: 'drop-shadow( 3px 4px 3px #e1ebcf)'}}
            />
        </Button>
        <Box
          sx={{
            width: '60vw',
            maxWidth: '100%',
            ml: 12,
            pl: 10,
            flexGrow: 1
          }}
        >
            <Collapse in={isExpanded} timeout={300}>
                <InputBase 
                    onChange={inputChange}
                    onKeyDown={handleKeyDown}
                    value = {searchInput}
                    placeholder="Search"
                    fullWidth
                    inputProps={{
                        sx: {
                          color: '#f3f8f1',
                        },
                      }}
                />
            </Collapse>
        </Box>
        <IconButton
            onClick={ handleEnter }
            color="lightWhite"
            sx={{ mr: 4 }}
        >
            <SearchIcon />
        </IconButton>
        <Button color="lightWhite" sx={{ mx: 6 }}>Home</Button>
        <Button color="lightWhite" sx={{ mx: 6 }}>Collection</Button>
        <Button color="lightWhite" sx={{ mx: 6 }}>Contact</Button>
        <IconButton color="lightWhite" sx={{ ml: 4, mr: 8 }}> <LocalMallIcon /> </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
