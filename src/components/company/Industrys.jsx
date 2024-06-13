import { Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({

  text: {
    fontSize: "25px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
  }
  },
  industryText: {
    color: "#03b9f5",
    fontSize:"14px",
    lineHeight:"30px",
   
  },
  mobileText: {
    [theme.breakpoints.down("sm")]: {
        textAlign: "center"
    }
}
 
}));

const company = [
  "360 ONE",
  "ADITYA BIRLA SUN LIFE",
  "AXIS",
  "BAJAJ FINSERV ASSET MANAGEMENT",
  "BANDHAN",
  "BANK OF INDIA",
  "BARODA BNP PARIBAS",
  "CANARA ROBECO",
  "DSP",
  "EDELWEISS",
  "FRANKLIN TEMPLETON",
  "GROWW",
  "HDFC",
  "HELIOS",
  "HSBC",
  "ICICI PRUDENTIAL",
  "IDBI",
  "INDIA BULLS",
  "INVESCO",
  "ITI",
  "JM FINANCIAL",
  "KOTAK"
]


function Industry(props) {
  const { classes } = useStyles()
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={5} >
        <Typography className={classes.mobileText}>Industry Leading</Typography>
        <Typography className={classes.text}>46 Fund houses</Typography>
        <img src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/38-funds-ill.svg"></img>

      </Grid>
      <Grid item xs={12} md={7} sx={{ display: "flex" }} className={classes.mobileView}>
        <Grid xs={12} md={6}>
          {company.map((item, index) => {
            return <Typography className={classes.industryText}>{item}</Typography>
          })}

        </Grid>
        <Grid xs={12} md={6}>
          {company.map((item, index) => {
            return <Typography  className={classes.industryText}>{item}</Typography>
          })}

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Industry;