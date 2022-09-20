import React from 'react'; 
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {

  return {
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center", 
      justifyContent: 'space-evenly', 
      paddingLeft: '.3%'
    },

    progress: {
        flexGrow: 1,
        height: '1vh',
    }, 

    label: {
        width: '5%',
        textAlign: 'center'
    }
  };
});

function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
       <Typography 
          variant='caption' 
          color='textSecondary'
      > Coeficiente de Progressão Baseado na Carga Horária</Typography>
      <Box className={classes.container} >
        <Box className={classes.progress} >
          <LinearProgress 
            variant="determinate" {...props} />
        </Box>
        <Box className={classes.label} >
          <Typography variant="h6" color="primary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default LinearProgressWithLabel;
