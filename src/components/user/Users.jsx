import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useRef } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({

    Maintext: {
        fontSize: "28px",
        fontWeight: "bold"
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
        padding: "35px 25px",
        borderRadius: "10px",
        marginRight: "20px",
        whiteSpace: "normal",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Adding shadow
        backgroundColor: "#fff",  // Ensuring the background is white for

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
    descriptionText: {
        textAlign: "center",
        fontSize: "14px",
        marginTop: "20px"
    },
    nameText: {
        marginTop: "30px",
        fontWeight: "bold"
    },
    subText: {
        fontSize: "14px"
    },
    imageStyle: {
        borderRadius: "55%",
        height: "100px",
        minHeight: "60px"
    },
    mobileText: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    }
}));

function Users(props) {
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
            <Typography className={classes.mobileText}>#happykuverians</Typography>
            <Typography className={classes.mainContainer}>Our users love us</Typography>
            <Box className={classes.mainContainer} ref={containerRef}>
                {[1, 2, 3, 4, 5, 6].map(() => {
                    return <Box className={classes.divContainer}>
                        <img className={classes.imageStyle} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/kuverians/krati_golash.png" ></img>
                        <Typography className={classes.descriptionText}>The platform is super easy to use & navigate and provides just the information you need!</Typography>
                        <Typography className={classes.nameText}>Krati Golash</Typography>
                        <Typography className={classes.subText}>IT Marketer, 28, Madhya Pradesh</Typography>
                        <Button className={classes.learnbutton}>Read Krati's story</Button><br />
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

export default Users;