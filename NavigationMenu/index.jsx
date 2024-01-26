import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import makeStyles from '@material-ui/styles/makeStyles'
import { Link } from '@material-ui/core';

const useStyles = makeStyles(() => {
    return {
       BasicMenu : {
            '@media(min-width: 681px)' : {
                display: 'none'
            },
           
        },
        links: {
            width: 'fit-content',
            
        },
        Container: {
            marginTop: 40,
        }
    }
})

export default function BasicMenu() {

    const classes = useStyles(); 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.BasicMenu}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </Button>
            <Menu
                className={classes.Container}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >

                <div >
                    <MenuItem onClick={handleClose}>
                    <Link className={classes.links} href='/courses' > Cursos </Link> 
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.links} href='/docs' > Documentação </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.links} href='/about' > Sobre </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.links} href='https://github.com/Daniel-Alencar/courses-univasf' > GitHub </Link>
                </MenuItem>
                </div>
            </Menu>
        </div>
    );
}