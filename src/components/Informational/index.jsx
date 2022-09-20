import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles';
import Typography  from '@material-ui/core/Typography';

import data from './data.json'
import Authors from '../Authors';

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
            alignItems: 'flex-start' 
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

export default function Informational() {
    
    const classes = useStyles(); 
    
    return (
        <div className={classes.root} >
            <Typography variant='h5' className={classes.heading} > Sobre o Projeto </Typography>
            <Typography variant='body2' className={classes.paragraph} > {data.aboutTheProject}  </Typography>
            <Typography variant='h5' className={classes.heading} > Sobre o Autor  </Typography>
            <Authors />
        </div>
    )           
}
