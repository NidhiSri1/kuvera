import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import TabComp from '../../components/tabComponent/Tabs';
import Avaliable from '../../components/avalibility/Avaliable';
import Feature from '../../components/featureList/Feature';
import Support from '../../components/supports/Support';
import NewInvesting from '../../components/investing/NewInvesting';
import Industry from '../../components/company/Industrys';
import Footer from '../../components/footerComponent/Footer';
import Users from '../../components/user/Users';

const useStyles = makeStyles()((theme) => ({
    root: {
        paddingTop: "100px",
    },
    imageStyle: {
        height: "220px",
        minHeight: "190"
    },
    mainHeader: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "20px 0px"

    },
    fontPadding: {
        margin: "20px 0px"
    },
    loginButton: {
        backgroundColor: "#03b9f5",
        color: "white",
        borderRadius: "50px",
        padding: "8px 20px",
        textTransform: "none",
        marginRight: "3%",

    },
    signUpButton: {
        backgroundColor: "white",
        borderColor: "#03b9f5",
        borderRadius: "50px",
        padding: "8px 20px",
        color: "#03b9f5",
        textTransform: "none"

    },
    gridBackground: {
        backgroundColor: "#faef6b"
    },
    gridBackground2: {
        backgroundColor: "#f0f5fa",
        margin: "100px 0px"
    },
    gridBackground3: {
        backgroundColor: "#0a2745",
    },
    careBox: {
        display: "flex",
        margin: "50px 0px",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }

    },
    careText: {
        fontSize: "20px",
        fontWeight: "bold",
        paddingRight: "40px"
    },
    careSubText: {
        fontSize: "14px"
    },
    mailText: {
        textDecoration: "none",
        color: "#03b9f5"
    },
    Maintext: {
        fontSize: "28px",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    investment: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    mobileText: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    }

}));

function Home(props) {
    const { classes } = useStyles()

    return (
        <>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item sm={12} xs={12} md={6} >
                        <Box>
                            <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/intro-ill.svg" className={classes.imageStyle} ></img>
                        </Box>
                        <Typography className={classes.mainHeader}>Online investing in <br />
                            India simplified - Kuvera</Typography>
                        <Typography className={classes.fontPadding}>Zero fee. Higher return.</Typography>
                        <Grid>
                            <Button className={classes.loginButton}>Log In</Button>
                            <Button variant="outlined" className={classes.signUpButton}>Sign Up</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TabComp />
                    </Grid>
                </Grid>
                <Avaliable />
                <Feature />
            </Container>
            <Box className={classes.gridBackground}>
                <Container maxWidth="lg" className={classes.root}>
                    <Support></Support>
                </Container>
            </Box>
            <Container maxWidth="lg" >
                <Box className={classes.careBox}>
                    <Typography className={classes.careText}>We Care.</Typography>
                    <Typography className={classes.careSubText}><a href="mailto:support@kuvera.in" className={classes.mailText} > Share</a> your comments and feedback with Gaurav (CEO).</Typography>
                </Box>
            </Container>
            <Container maxWidth="lg" >
                <Typography className={classes.mobileText}>Why Kuvera</Typography>
                <Typography className={classes.Maintext}>Because, your best interest is ours too.</Typography>
                <NewInvesting></NewInvesting>
            </Container>
            <Box className={classes.gridBackground2}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={5}>
                            <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/completely-free-ill.svg"></img>
                        </Grid>
                        <Grid item xs={12} md={7} className={classes.investment}>
                            <Typography className={classes.Maintext}>The first free investment management <br />
                                platform</Typography>
                            <Typography className={classes.mobileText}>No conflict of interest. Nada.</Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="lg" >
                <Industry />
            </Container>
            <Container maxWidth="lg" >
                <Users />
            </Container>
            <Box sx={{ backgroundColor: "#f0f5fa", marginTop: "100px" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={5}>
                            <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/start-investing-today-ill.svg"></img>
                        </Grid>
                        <Grid item xs={12} md={7} className={classes.investment}>
                            <Typography className={classes.Maintext}>Start investing today
                            </Typography>
                            <Typography>Don't wait. * 1L today will buy a lot less in 10 years if not invested to grow. Take
                                2 minutes to sign up. The future you will be grateful.</Typography>
                            <Button className={classes.loginButton} sx={{ width: "150px", marginTop: "30px" }}>Start Investing</Button>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            <Box className={classes.gridBackground3}>
                <Container maxWidth="lg">
                    <Footer />
                </Container>
            </Box>
        </>

    );
}

export default Home;