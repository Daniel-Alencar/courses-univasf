import React from 'react'

import makeStyles from '@material-ui/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Tooltip  from '@material-ui/core/Tooltip'
import AppBar  from '@material-ui/core/AppBar'
import Toolbar  from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

import logoLight from '../../assets/img/univasf_light.png'
import logoDark from '../../assets/img/univasf_dark.png'

const useStyles = makeStyles((theme) => {
    return {
        AppBar: {
            display: 'flex',
            backgroundColor: theme.palette.background.default, 
            height: 64,
        },
        img: {
            margin: theme.spacing(2), 
            width: theme.spacing(5)
        }, 
        date: {
            flexGrow: 1,
            marginLeft: 0,
            lineHeight: 1,
        },
        avatar: {
            margin: theme.spacing(2), 
        }, 

        links: {
            margin: theme.spacing(1,1)
        }
    }
})



export default function Header( {paletteType, setPaletteType, title, children} ) {
    
    const classes = useStyles(); 

    return (
        <div className={classes.AppBar} elevation={0} >
            <Toolbar>

                <div href='/' style={{
                    textDecoration: 'none',

                    display: 'flex',
                    flexGrow: 1,
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

                <Link className={classes.links} href='/courses' > Cursos </Link>    
                <Link className={classes.links} href='/docs' > Documentação </Link>
                <Link className={classes.links} href='/about' > Sobre </Link>
                <Link className={classes.links} href='https://github.com/Daniel-Alencar/courses-univasf' > GitHub </Link>
                
                <Tooltip title={!paletteType? 'Tema claro' : 'Tema escuro' }>
                    <IconButton onClick={() => setPaletteType(!paletteType)} color='primary' >
                        { paletteType?  <Brightness4Icon /> : <Brightness7Icon /> }
                    </IconButton>
                </Tooltip>
            </Toolbar>
            {children}
        </div>
    )
}
