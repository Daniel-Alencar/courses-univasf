import React from 'react'; 
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from '@material-ui/core/IconButton'
import Tooltip  from '@material-ui/core/Tooltip'

import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => {

  return {
    divContainer: {
      width: "100vw",
      position: 'static',

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.default,

      height: 35,
    },

    container: {
      display: "flex",
      alignItems: "center", 
      justifyContent: 'space-evenly', 
      paddingLeft: '.3%',
      boxSizing: 'border-box',
      position: "fixed",
      height: 35,

      width: "90%",
      backgroundColor: theme.palette.background.default,
    },

    progress: {
        flexGrow: 1,
        height: '1vh',
    }, 

    label: {
        width: 60,
        textAlign: 'center'
    }
  };
});


function LinearProgressWithLabel(props) {

  const classes = useStyles();

  return (
    <div className={classes.divContainer}>
      <Box className={classes.container} >
        <Tooltip title={'Limpar'} >
          <IconButton onClick={props.resetFunction} color='primary' >
            <LoopIcon fontSize='inherit' fontWeight='bold' />
          </IconButton>
        </Tooltip>
        <Box className={classes.progress} >
          <LinearProgress 
            variant="determinate" {...props} />
        </Box>
        <Box className={classes.label} >
          <Typography style={{ fontSize: 17 }} variant="h6" color="primary">
            {
            `${Math.round(props.value)}%`
            }
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default LinearProgressWithLabel;
