import React from 'react'

import makeStyles from '@material-ui/styles/makeStyles'
import Link from '@material-ui/core/Link'
import Tooltip  from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

const useStyles = makeStyles((theme) => {
    return {
        linksContainer: {
            position: 'static !important',
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',

            backgroundColor: theme.palette.background.default,
        },
        links: {
            margin: theme.spacing(1,1)
        }
    }
})



export default function Links( {paletteType, setPaletteType } ) {
    
    const classes = useStyles(); 

    return (
        <div className={classes.linksContainer}>
            <Link className={classes.links} href='/courses' > Cursos </Link>    
            <Link className={classes.links} href='/docs' > Documentação </Link>
            <Link className={classes.links} href='/about' > Sobre </Link>
            <Link className={classes.links} 
                href='https://github.com/Daniel-Alencar/courses-univasf'
            >
                GitHub 
            </Link>
            
            <Tooltip title={!paletteType? 'Tema claro' : 'Tema escuro' }>
                <IconButton onClick={() => setPaletteType(!paletteType)} color='primary' >
                    { paletteType?  <Brightness4Icon /> : <Brightness7Icon /> }
                </IconButton>
            </Tooltip>
        </div>
    )
}
