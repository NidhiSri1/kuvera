import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import { Button, Divider, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyles = makeStyles()((theme) => ({
  buttonText: {
    textTransform: "none",
    fontSize: "16px",
  },
  tabMainText: {
    color: "#03b9f5",
    fontWeight: "bold"
  },
  mainGrid: {
    margin: "20px 0px"
  },
  divisionText: {
    color: "#8f98a1",
    fontSize: "14px"
  },
  tabs: {
    '& .MuiTab-root': {
      color: '#8f98a1',
      '&.Mui-selected': {
        color: 'black',
      },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#03b9f5',
    },
  },
  sourceText: {
    fontSize: "12px",

  },
  sourceDiv: {
    display: 'flex', justifyContent: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  buttonStyle:{
    color:"#03b9f5",
    textTransform:"none"
  }
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const values = [{
  text: "Quant Infrastructure Growth Direct Plan",
  navValue: 45.2223,
  navKey: "Nav",
  yValue: "82.30%",
  yKey: "1Y",
  threeValue: "37.14%",
  threeKey: "3Y"
},
{
  text: "LIC MF Infrastructure Growth Direct Plan",
  navValue: 52.5223,
  navKey: "Nav",
  yValue: "81.30%",
  yKey: "1Y",
  threeValue: "36.14%",
  threeKey: "3Y"
},
{
  text: "Invesco India Infrastructure Growth Direct Plan",
  navValue: 76.0800,
  navKey: "Nav",
  yValue: "75.56%",
  yKey: "1Y",
  threeValue: "36.20%",
  threeKey: "3Y"
}
]

export default function TabComp() {
  const { classes } = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0 }}>
        <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={classes.buttonText} label="Mutual Funds" {...a11yProps(0)} />
          <Tab className={classes.buttonText} label="Stocks" {...a11yProps(1)} />
          <Tab className={classes.buttonText} label="SaveSmart" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {values.map((item) => {
          return <Box>
            <Typography className={classes.tabMainText}>{item.text}</Typography>
            <Grid container className={classes.mainGrid}>
              <Grid item sm={4} >
                <Typography className={classes.divisionText}>{item.navKey}</Typography>
                <Typography>{item.navValue}</Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography className={classes.divisionText}>{item.yKey}</Typography>
                <Typography>{item.yValue}</Typography>
              </Grid><Grid item sm={4}>
                <Typography className={classes.divisionText}>{item.threeKey}</Typography>
                <Typography>{item.navValue}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: "20px" }} />
          </Box>
        })}
        <Box className={classes.sourceDiv}>
          <Typography className={classes.sourceText}>Source: Morningstar</Typography>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button className={classes.buttonStyle} endIcon={<ArrowForwardIosIcon fontSize='8px'/>}>Explore More</Button>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Stocks
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        SaveSmart
      </CustomTabPanel>
    </Box>
  );
}