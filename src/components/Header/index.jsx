import React, { useEffect, useState } from 'react'

import makeStyles from '@material-ui/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Toolbar  from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { AppBar } from '@material-ui/core'

import logoLight from '../../assets/img/univasf_light.png'
import logoDark from '../../assets/img/univasf_dark.png'
import Links from '../Links'

const useStyles = makeStyles((theme) => {
    return {
        AppBar: {
            display: 'flex',
            position: 'static !important',
            backgroundColor: theme.palette.background.default, 
            height: 64,
        },
        Toolbar: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'static !important',
        },
        img: {
            margin: theme.spacing(2), 
            width: theme.spacing(5)
        }, 
        date: {
            marginLeft: 0,
            lineHeight: 1,
        },
        avatar: {
            margin: theme.spacing(2), 
        }, 
        linksContainer: {
            position: 'static !important',
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
        },
        links: {
            margin: theme.spacing(1,1)
        }
    }
})



export default function Header( {
    paletteType, setPaletteType, title, children
} ) {
    
    const classes = useStyles(); 

    const [tamanhoDaTela, setTamanhoDaTela] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setTamanhoDaTela(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <AppBar className={classes.AppBar} elevation={0} >
            <Toolbar className={classes.Toolbar}>

                <div href='/' style={{
                    textDecoration: 'none',

                    display: 'flex',
                }}>
                    <Link href='/' style={{
                        textDecoration: 'none',

                        display: 'flex',
                        alignItems: 'center',

                        marginLeft: 0,
                        lineHeight: 1
                    }}>
                        <img src={paletteType? logoLight : logoDark } className={classes.img} alt='logo'/>
                        <Typography 
                            variant='h6' 
                            color='textSecondary' 
                            className={classes.date}
                        >
                            Cursos UNIVASF
                            <Typography variant='body2'>
                                Juazeiro
                            </Typography>
                        </Typography>
                    </Link>
                </div>

                <Typography 
                    className={classes.date} 
                    variant='overline' 
                    color='textSecondary'
                >
                    {title}
                </Typography>
                
                {
                    tamanhoDaTela >= 600 &&
                    <Links paletteType={paletteType} setPaletteType={setPaletteType}/>
                }
                
            </Toolbar>
            {children}
        </AppBar>
    )
}
