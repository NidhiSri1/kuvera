import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useRef } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({

    Maintext: {
        fontSize: "28px",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    subMaintext: {
        fontSize: "22px",
        fontWeight: "bold",
        marginTop: "20px"
    },
    mainContainer: {
        margin: "20px 0px",
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "10px",
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    divContainer: {
        display: "inline-block",
        minWidth: "250px",
        backgroundColor: "#ecf6ff",
        padding: "35px 25px",
        borderRadius: "10px",
        marginRight: "20px",
        whiteSpace: "normal",

    },
    borderButton: {
        border: "1px solid #03b9f5",
        borderRadius: "50px",
        padding: "8px 20px",
        color: "#03b9f5",
        textTransform: "none"
    },
    learnbutton: {
        borderRadius: "50px",
        padding: "8px 20px",
        color: "#03b9f5",
        textTransform: "none",
        padding: "20px 0px"
    },
    scroll: {
        display: "flex",
        justifyContent: "flex-end"

    },
    mobileText: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    }
}));

function Feature(props) {
    const { classes } = useStyles()
    const containerRef = useRef(null);

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    return (
        <Box>
            <Typography className={classes.mobileText}>Invest your way</Typography>
            <Typography className={classes.Maintext}>On login. All features</Typography>
            <Box className={classes.mainContainer} ref={containerRef}>
                {[1, 2, 3, 4, 5, 6].map(() => {
                    return <Box className={classes.divContainer}>
                        <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/tax-saver-icon.svg"></img>
                        <Typography className={classes.subMaintext}>Tax saver</Typography>
                        <Typography>Lowest lock-ins. Simple withdrawals.
                            Potentially better returns. ELSS is the
                            new hero to save the day!</Typography>
                        <Button className={classes.learnbutton}>Learn more</Button><br />
                        <Button className={classes.borderButton}>Explore LSS funds</Button>
                    </Box>
                })}
            </Box>
            <Box className={classes.scroll}>

                <IconButton onClick={scrollLeft} aria-label="delete" size="small" sx={{ color: "#03b9f5" }}>
                    <ArrowLeftIcon></ArrowLeftIcon>
                </IconButton>
                <IconButton aria-label="delete" size="small" sx={{ color: "#03b9f5" }}>
                    <CircleIcon size="small" sx={{ fontSize: "10px" }} />
                </IconButton>
                <IconButton onClick={scrollRight} aria-label="delete" size="small" sx={{ color: "#03b9f5" }}>
                    <ArrowRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Feature;