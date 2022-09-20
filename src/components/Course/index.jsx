import React, {useState, forwardRef, useImperativeHandle} from 'react'
import Button from '@material-ui/core/Button'
import makeStyles  from '@material-ui/styles/makeStyles';
import Typography  from '@material-ui/core/Typography'; 
import '../../index.css'


const useStyles = makeStyles((theme, available, active) => {
    return ({
        course: {
            width: 140, 
            height: 70, 
            padding: 2.5, 
            textTransform: 'none',
            margin: 4,  
        }, 
        text: {
            width: '95%',
            textAlign: 'left',
            fontSize: 12, 
        }
    });
})

const Course = forwardRef(({course, onChange, disable, status, onLegend}, ref) => {
    
        
    const [active, setActive] = useState(status);
    const [available, setAvailable] = useState(disable); 

    useImperativeHandle(ref, () => ({ 
        setState(available, active) {
            setActive(active);
            setAvailable(available);
        }
    }));

    const handleToState = () => {
        if (onLegend) return; 
        const update = !active 
        if (!available) {
            setAvailable(true);
        }
        setActive(update);
        onChange(update, course);
    }

    const classes = useStyles(available, active);  

    return (
        <Button 
            className={classes.course}
            color={active? 'primary' : 'secondary' }
            onClick={() => handleToState()}
            variant={available? 'contained' : 'outlined' }
        >
            <Typography 
                className={classes.text} 
                variant='caption'
                align='left' 
                color={active? 'error' : 'inherit'}
            >
                {course.name} 
            </Typography>          
        </Button>
    )
});

export default Course; 