import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DropDown from '../dropDownComponent/DropDown';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
        position: "fixed",
        backgroundColor: "white",
        top: 0,
        zIndex: 1100,
        width: "100%",
        paddingTop: "30px",
        paddingBottom: "10px",
        display:"flex"
    },
    subGrid:{
        display: "flex", justifyContent: "center"
    },
    textColor:{
        color: "#8f98a1",
        fontSize:"17px"
    },
    leftGrid:{
        alignSelf:"center"
    }
}));

function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {classes} = useStyles()
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let dropDownList = ["Invest", "Explore", "Mutual Funds", "Fixed Deposit", "Stocks", "Save Smart"]
    let dropDownList2 = ["Features", "Calculators", "Set a goal", "Trade Smart", "Family Account", "Tax Harvesting","Save Taxes","Consolidate"]

    return (
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12} md={6} className={classes.subGrid}>
                    <Grid xs={2} className={classes.leftGrid}>
                        <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/kuvera-logo-dark.svg"  style={{ width: "90%", minWidth: "70px" }} ></img>
                    </Grid>
                    <DropDown list={dropDownList} handleClose={handleClose} handleClick={handleClick} anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open}></DropDown>
                    <DropDown list={dropDownList2} handleClose={handleClose} handleClick={handleClick} anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open}></DropDown>
                </Grid>
                <Grid xs={12} md={6} className={classes.subGrid}>
                    <Grid className={classes.leftGrid} xs={2} md={1}>
                        <SearchIcon className={classes.textColor}/>
                    </Grid>
                    <Grid className={classes.leftGrid} xs={2} md={1} >
                        <Typography className={classes.textColor}>Log in</Typography>
                    </Grid>
                    <Grid className={classes.leftGrid} xs={2} md={1}>
                        <Typography className={classes.textColor}>Sign up</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;