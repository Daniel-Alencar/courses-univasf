import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Documentations from '../../components/Documentations';

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start' 
        }
    });
})
export default function Docs({paletteType, setPaletteType}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header 
                paletteType={paletteType} 
                setPaletteType={setPaletteType} 
            />
            <Documentations />
            <Footer 
                paletteType={paletteType} 
                setPaletteType={setPaletteType}  
            />
        </div>
    )
}
