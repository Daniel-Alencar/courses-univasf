import React, { useEffect, useState } from 'react'

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


import makeStyles from '@material-ui/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Toolbar  from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { AppBar } from '@material-ui/core'

import logoLight from '../../assets/img/univasf_light.png'
import logoDark from '../../assets/img/univasf_dark.png'
import Links from '../Links'

const useStyles = makeStyles((theme) => ({
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
      width: theme.spacing(5),
    },
    date: {
      marginLeft: 0,
      lineHeight: 1,
    },
    selectCampus: {
        color: theme.palette.text.secondary,
        fontSize: 12,
        backgroundColor: 'transparent',
      
        "&:focus": {
          backgroundColor: 'transparent',
        },
      
        "& .MuiSelect-select:focus": {
          backgroundColor: 'transparent',
        },
      
        "& .MuiSelect-select": {
          backgroundColor: 'transparent',
          paddingRight: theme.spacing(3),
        },
      
        "& .MuiSelect-icon": {
          color: theme.palette.text.secondary,
        },
    },
    menuItem: {
      fontSize: 12,
    },
  }));  

export default function Header({
    paletteType,
    setPaletteType,
    campus,
    setCampus,
    showCampusSelect = false,
    title,
    children
}) {
  
    
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
                            <Typography variant="body2" color="textSecondary">
                            {showCampusSelect && (
                                <Select
                                value={campus}
                                onChange={(e) => setCampus(e.target.value)}
                                disableUnderline
                                className={classes.selectCampus}
                                >
                                <MenuItem className={classes.menuItem} value="juazeiro">
                                    Campus Juazeiro
                                </MenuItem>
                                <MenuItem className={classes.menuItem} value="petrolina">
                                    Campus Petrolina
                                </MenuItem>
                                </Select>
                            )}
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
