import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import data from './data.json'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },      
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  
  label: {
    color: theme.palette.success.main 
  }
  
}));



export default function Steppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = data.stepsHeading;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" className={classes.root}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className={classes.label} >{label}</StepLabel>
            <StepContent>
              <Typography variant='body2'  >{data.stepsParagraph[index]}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    <Typography color='error' variant='caption' > {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'} </Typography>
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div>
          <Button onClick={handleReset} className={classes.button} color='primary' >
            Reiniciar
          </Button>
        </div>
      )}
    </div>
  );
}