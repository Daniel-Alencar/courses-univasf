import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles';
import Typography  from '@material-ui/core/Typography';

import data from './data.json'

import Author from '../Author';
import dataAuthors from '../Author/data.json';


const useStyles = makeStyles((theme) => {
    return ({
        root: {
            marginTop: 64, 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            maxWidth: 1000,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',  
        },

        
        heading: {
            marginBotton: theme.spacing(3),
            marginButton: theme.spacing(3),
            color: theme.palette.text.primary
        },
        
        paragraph: {
            marginBottom: theme.spacing(2),
            marginButton: theme.spacing(2),
            color: theme.palette.text.primary
        }
    });
})

export default function Informational() {
    
    const classes = useStyles(); 
    
    return (
        <div className={classes.root} >
            <Typography variant='h5' className={classes.heading} >
                Sobre o Projeto 
            </Typography>
            <Typography variant='body2' className={classes.paragraph} >
                {data.aboutTheProject}
            </Typography>
            <Typography variant='body2' className={classes.paragraph} >
                {data.contactMessage}
                <br/>
                <ul>
                    {
                        data.emails.map(email => {
                            return (
                                <li>{email}</li>
                            )
                        })
                    }
                </ul>
            </Typography>
            <Typography variant='h5' className={classes.heading} >
                Sobre os  autores 
            </Typography>
            
            {
                dataAuthors.authors.map((author, index) => {
                    return(
                        <Author 
                            key={author.key}
                            name={author.name}
                            image={author.image}
                            github={author.github}
                            linkedin={author.linkedin}
                            description={author.description}
                        />
                    )
                })
            }
            
        </div>
    )           
}
