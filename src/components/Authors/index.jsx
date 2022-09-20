import React from 'react'

import makeStyles  from '@material-ui/styles/makeStyles';
import Typography  from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link'

import { FaLinkedin } from 'react-icons/fa'; 
import { FaGithub } from 'react-icons/fa'; 

import data from './data.json'
import authorProfile from '../../assets/img/author.jpg'


const useStyles = makeStyles((theme) => {
    return ({
        root: {
            marginTop: theme.spacing(3),
            marginButton: theme.spacing(3),
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start', 
        },

        
        heading: {
            marginTop: theme.spacing(3),
            marginButton: theme.spacing(3),
            color: theme.palette.text.primary
        },
        
        paragraph: {
            color: theme.palette.text.primary
        },

        avatar: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },

        profile: {
            marginRight: theme.spacing(3),
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
        },

        icons: {
            marginTop: theme.spacing(2),    
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center'
        }, 

        icon: {
            margin: theme.spacing(.5),
        }
    });
})




export default function Authors() {
    
    const classes = useStyles(); 

    const Icons = () => {
        return (
            <div className={classes.icons} >
                <Link 
                    alt='Github' 
                    target='_blank' 
                    href={data.github}
                > 
                    <FaGithub className={classes.icon} size={20} />
                </Link>
                <Link 
                    alt='Linkedin' 
                    target='_blank' 
                    href={data.linkedin}
                > 
                    <FaLinkedin className={classes.icon} size={20} />
                </Link>
            </div>
        ) 
    }   

    const AutorProfile = () => {
        return (
            <div className={classes.profile} >
                <Avatar 
                    className={classes.avatar} 
                    alt='Rafael Guimarães' 
                    src={authorProfile} 
                />
                <Icons /> 
            </div>
        ) 
    }   

    return (
        <div className={classes.root} > 
            <AutorProfile />
            <Typography 
                className={classes.paragraph}
                variant='body2'  
            > 
                {data.author} 
            </Typography>
        </div>
    )           
}
