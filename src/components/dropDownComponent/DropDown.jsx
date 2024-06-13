import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function DropDown(props) {
    const { list, handleClick, anchorEl, setAnchorEl, open, handleClose } = props
    return (
        <>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: "#8f98a1", textTransform: "none",fontSize:"17px" }}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {list[0]}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {list.map((item,index) => {
                    return index != 0 ? <MenuItem sx={{color: "#8f98a1"}} onClick={handleClose}>{item}</MenuItem> : ""
                })}
            </Menu>
        </>
    );
}

export default DropDown;