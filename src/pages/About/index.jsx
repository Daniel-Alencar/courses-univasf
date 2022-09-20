import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Informational from '../../components/Informational';

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

export default function About({paletteType, setPaletteType}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header paletteType={paletteType} setPaletteType={setPaletteType} />
            <Informational />
            <Footer />
        </div>
    )
}
