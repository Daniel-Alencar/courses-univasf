import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles';
import Typography  from '@material-ui/core/Typography';

import Course from '../Course';
import Steppers from '../Steppers';
import data from './data.json'

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            marginTop: theme.spacing(12), 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

            marginBottom: 60,
        },

        courses: {
            marginTop: theme.spacing(2),
            marginButton: theme.spacing(2),
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start', 
            flexWrap: 'wrap',
        },
        heading: {
            marginTop: theme.spacing(3),
            marginButton: theme.spacing(3),
            color: theme.palette.text.primary
        },
        
        paragraph: {
            marginTop: theme.spacing(2),
            marginButton: theme.spacing(2),
            color: theme.palette.text.primary
        }
    });
})
export default function Documentations() {
    
    const classes = useStyles(); 


    const Courses = () => {
        return (
            <div className={classes.courses}>
                <Course 
                    className={classes.courses}
                    course={{name: 'Componente Bloqueada'}} 
                    status={false} 
                    disable={false}
                    onLegend={true} 
                />
                <Course
                    className={classes.courses} 
                    course={{name: 'Componente Desbloqueada'}} 
                    status={false} 
                    disable={true} 
                    onLegend={true}
                />
                <Course
                    className={classes.courses}
                    course={{name: 'Componente Finalizada'}} 
                    status={true}  
                    disable={true} 
                    onLegend={true}
                    
                />
            </div>
        );
    }
    
    return (
        <div className={classes.root} >
            <Typography variant='h5' className={classes.heading}>
                 {data.legend} 
            </Typography>
            <Courses />
            <Typography variant='h5' className={classes.heading}>
                 {data.usage} 
            </Typography>
            <Typography variant='body2' className={classes.paragraph}>
                 {data.usageParagraph}
            </Typography>
            <Steppers />
        </div>
    )
}
