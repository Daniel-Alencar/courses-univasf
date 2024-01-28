import React, { useEffect, useState } from 'react';

import makeStyles  from '@material-ui/styles/makeStyles';
import Link from '@material-ui/core/Link';

import Links from '../Links';

const useStyles = makeStyles((theme) => {
    return ({
        footer: {
            width: '100%',
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            textAlign: 'center',
            alignItems: 'center', 
            backgroundColor: theme.palette.primary.dark,

            position: 'fixed !important',
            bottom: '0 !important',
        },
        linksContentContainer: {
            // position: 'fixed !important',
            // bottom: '0 !important',

            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            margin: 10, 
            color: '#fafafa'
        }
    });
})

export default function Footer({ 
    paletteType, setPaletteType
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

    if(tamanhoDaTela < 600) {
        return (
            <footer className={classes.linksContentContainer}>
                <Links
                    paletteType={paletteType} 
                    setPaletteType={setPaletteType}
                />
            </footer>
        )
    } else {
        return (
            <footer className={classes.footer}>
                <Link className={classes.text} href='/' > Cursos  </Link>
                <Link className={classes.text} href='/docs' > Documentação </Link>
                <Link className={classes.text} href='/about' > Sobre </Link>
                <Link className={classes.text} href='https://github.com/Daniel-Alencar/courses-univasf' > GitHub </Link>

                <Link 
                    className={classes.text} 
                    target="_blanck" 
                    href='https://portais.univasf.edu.br/' 
                >
                    UNIVASF Oficial
                </Link>
            </footer>
        )
    }
}
