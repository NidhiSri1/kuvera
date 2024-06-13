import { Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
 
  text: {
    fontSize: "18px",
    fontWeight:"bold"
  },
  subText:{
    fontSize:"14px"
  },
  emailtext:{
   display:"flex",
   justifyContent:"center",
   padding:"25px 0px",
   fontSize:"14px"
  },
  mailText:{
    textDecoration:"none",
    color:"#03b9f5"
  }
}));

function Support(props) {
    const {classes} = useStyles()
    return (
        <>
        
        <Grid container spacing={2}>
            <Grid item sm={4}>
                <Typography className={classes.text}>Oct 2017
                </Typography>
                <Typography className={classes.subText}>We pioneered commission free Direct Plan
                    investing.</Typography>
            </Grid>
            <Grid item sm={4}>
                <Typography className={classes.text}>Super support
                </Typography>
                <Typography className={classes.subText}>Handled by a caring team on chat, email and <br/>
                    tweet!</Typography>
            </Grid>
            <Grid item sm={4}>
                <Typography className={classes.text}>Stop paying commission
                </Typography>
                <Typography className={classes.subText}>Switch to commission free Direct Plans on <br/>
                    Kuvera.</Typography>
            </Grid>
        </Grid>
        <Typography className={classes.emailtext}>Reach us at  <a href="mailto:support@kuvera.in" className={classes.mailText} > &nbsp; support@kuvera.in</a></Typography>
        </>
    );
}

export default Support;