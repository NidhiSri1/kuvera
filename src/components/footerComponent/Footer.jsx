import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    containerStyle: {
        padding: "50px 0px"
    },
    text: {
        color: "white",
        lineHeight: "40px"
    },
    imageSize: {
        height: "30px",
        margin: "20px 0px"
    },
    buttonStyle: {
        border: "1px solid white",
        color: "white",
        borderRadius: "50px"
    },
    textHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    subText: {
        fontSize: "14px",
        color: "white"
    },
    mobileText: {
        [theme.breakpoints.down("sm")]: {
           marginLeft:"20px"
        }
    }
}));

function Footer(props) {
    const { classes } = useStyles()
    return (
        <Box className={classes.containerStyle}>

            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12} md={3} className={classes.mobileText}>
                    <img src='https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/kuvera-logo-light.svg' width="100px"></img>
                    <Box>
                        <img className={classes.imageSize} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/facebook_Logo.svg"></img>
                        <img className={classes.imageSize} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/Twitter_Logo.svg"></img>
                        <img className={classes.imageSize} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/youtube_Logo.svg"></img>
                        <img className={classes.imageSize} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/Linkeidn_Logo.svg"></img>
                        <img className={classes.imageSize} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/insta.svg"></img>

                    </Box>
                    <Button className={classes.buttonStyle}>Get finance insight</Button>
                </Grid>
                <Grid xs={12} md={2} className={classes.mobileText}>
                    <Typography className={classes.text}> About Us</Typography>
                    <Typography className={classes.text}> The Team</Typography>
                    <Typography className={classes.text}> Why Kuvera</Typography>
                    <Typography className={classes.text}> Press</Typography>
                    <Typography className={classes.text}> Terms & Conditions
                    </Typography>
                    <Typography className={classes.text}> Regulatory Disclosure</Typography>

                </Grid>
                <Grid xs={12} md={2} className={classes.mobileText}>
                    <Typography className={classes.text}> Investing</Typography>
                    <Typography className={classes.text}> Switch to Direct Funds</Typography>
                    <Typography className={classes.text}> Save taxes</Typography>
                    <Typography className={classes.text}> Set a goal</Typography>
                    <Typography className={classes.text}> Explore funds
                    </Typography>

                </Grid>
                <Grid xs={12} md={2} className={classes.mobileText}>
                    <Typography className={classes.text}> Top fund houses</Typography>
                    <Typography className={classes.text}> Axis Mutual Funds
                    </Typography>
                    <Typography className={classes.text}> SBI Mutual Funds</Typography>
                    <Typography className={classes.text}> Nippon Mutual Funds</Typography>
                    <Typography className={classes.text}> ICICI Mutual Funds
                    </Typography>
                </Grid>
                <Grid xs={12} md={2}  className={classes.mobileText}>
                    <Typography className={classes.text}> Learn more
                    </Typography>
                    <Typography className={classes.text}> Blog</Typography>
                    <Typography className={classes.text}> Tax</Typography>
                    <Typography className={classes.text}> Retirement
                    </Typography>
                    <Typography className={classes.text}> Sitemap</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ borderColor: '#ACB4BC', margin: "15px 0px" }} />
            <Grid className={classes.textHeader}>
                <Typography className={classes.subText}>2024 © Arevuk Advisory Services Pvt Ltd. Coded with  from India</Typography>
                <Typography className={classes.subText}>Download mobile apps</Typography>
            </Grid>
        </Box>
    );
}

export default Footer;