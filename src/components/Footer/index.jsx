import React from 'react';

import makeStyles  from '@material-ui/styles/makeStyles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => {
    return ({
        footer: {
            marginTop: 'auto',
            width: '100%',
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            textAlign: 'center',
            alignItems: 'center', 
            backgroundColor: theme.palette.primary.dark, 
        }, 
        text: {
            margin: 10, 
            color: '#fafafa'
        }
    });
})

export default function Footer() {

    const classes = useStyles(); 
  
    return (
        <footer className={classes.footer}>
            <Link className={classes.text} href='/' > Cursos  </Link>
            <Link className={classes.text} href='/docs' > Documentação </Link>
            <Link className={classes.text} href='/about' > Sobre </Link>
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
