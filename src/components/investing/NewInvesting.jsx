import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({

    text: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "8px",

    },
    subText: {
        fontSize: "14px",
        marginBottom: "30px",
    },
    containerDisplay: {
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            marginLeft: "18px"
        }
    },
    loginButton: {
        backgroundColor: "#03b9f5",
        color: "white",
        borderRadius: "50px",
        padding: "8px 20px",
        textTransform: "none",
        marginRight: "3%",

    },
}));

function NewInvesting(props) {
    const { classes } = useStyles()
    return (
        <>
            <Grid Grid container spacing={2} sx={{ flexGrow: 1, marginTop: "30px" }}>
                <Grid container spacing={7} xs={12} md={7} className={classes.containerDisplay}>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.text}>Expert team</Typography>
                        <Typography className={classes.subText}>We are data driven ex-money managers &
                            technologists. We know how to make
                            financial management easy.
                            More about our team</Typography>
                        <Typography className={classes.text}>Bank level security
                        </Typography>
                        <Typography className={classes.subText}>We employ the latest security protocols &
                            partner with reputable institutions to keep
                            your money safe.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.text}>Only direct plans
                        </Typography>
                        <Typography className={classes.subText}>We offer Direct Plans. So you never pay the
                            commissions (up to 1.5%) that you would in a
                            Regular Plan. That adds up, up to 35% more
                            in just 20 years!</Typography>
                        <Typography className={classes.text}>SEBI registered
                        </Typography>
                        <Typography className={classes.subText}>We are registered with the Securities and
                            Exchange Board of India (SEBI) as an
                            Investment Advisor (INA200005166).</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/why-kuvera-ill.svg"></img>
                </Grid>
                <Button className={classes.loginButton}>Start investing</Button>

            </Grid>
        </>
    );
}

export default NewInvesting;