import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  gridContainer: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center"
    },
  },
  leftImageGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: '20px',
      display: 'none',
    },
  },
  boxSize: {
    marginRight: "25px",
    [theme.breakpoints.down('sm')]: {
      marginRight: "0px",
      marginBottom: "20px",
    },
  },
  text: {
    fontSize: "25px",
    fontWeight: "bold",
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  mobileImage: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileText:{
    [theme.breakpoints.down("sm")]:{
      textAlign:"center"
    }
  }

}));

function Avaliable(props) {
  const { classes } = useStyles()
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, marginTop: "20px" }}>
      <Grid item xs={12} md={6} className={classes.gridContainer}>
        <Box className={classes.boxSize}>
          <img className={classes.imageStyle} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/android-blue.svg"></img>
        </Box>
        <Box className={classes.boxSize}>
          <img className={classes.imageStyle} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/apple-blue.svg"></img>
        </Box>
        <Box>
          <Typography className={classes.mobileText}>Mobile First</Typography>
          <Typography className={classes.text}>Available on all devices</Typography>
        </Box>
      </Grid>
      <Grid xs={6} md={6} className={classes.leftImageGrid} >
        <img className={classes.mobileImage} src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/ill-cm.svg"></img>
      </Grid>
    </Grid>
  );
}

export default Avaliable;