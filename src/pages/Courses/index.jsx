import React from "react"
import { useStyles } from "./styles"; 
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

// icons
import { BsFillCpuFill } from "react-icons/bs";

import { IoMdConstruct } from 'react-icons/io';

import { BsFillGearFill } from 'react-icons/bs';

import { GiThreeLeaves } from 'react-icons/gi';

import { RiStickyNoteFill } from 'react-icons/ri';

import { AiFillThunderbolt } from "react-icons/ai";

import { FaPaintBrush } from "react-icons/fa";

import { BsPeopleFill } from "react-icons/bs";

import { ContainerGrid } from "./styles";
import { ContainerBody } from "./styles";

function Courses({paletteType, setPaletteType}) {

    const classes = useStyles();
    const history = useHistory(); 
    
    return (
        <div className={classes.root} >
            <Header paletteType={paletteType} setPaletteType={setPaletteType} />
                
            <ContainerBody> 

                <Typography className={classes.title} variant="h5" color='textSecondary'     > 
                    Selecione o curso
                </Typography>
                
                <ContainerGrid>

                    <Button
                        startIcon={<GiThreeLeaves />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia Agrícola e Ambiental
                    </Button>

                    <Button
                        startIcon={<IoMdConstruct />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/2')}
                    >
                        Engenharia Civil
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/3')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<AiFillThunderbolt />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/4')}
                    >
                        Engenharia Elétrica
                    </Button>

                    <Button
                        startIcon={<BsFillGearFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/5')}
                    >
                        Engenharia Mecânica
                    </Button>

                    <Button
                        startIcon={<RiStickyNoteFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/6')}
                    >
                        Engenharia de Produção
                    </Button>

                    <Button
                        startIcon={<FaPaintBrush />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/7')}
                    >
                        Artes Visuais
                    </Button>

                    <Button
                        startIcon={<BsPeopleFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/8')}
                    >
                        Ciências Sociais
                    </Button>

                    <Button
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/9')}
                    >
                        Engenharia da Computação Novo PPC
                    </Button>

                </ContainerGrid>
            </ContainerBody>
            <Footer 
                paletteType={paletteType} 
                setPaletteType={setPaletteType}  
            /> 
        </div>
    )
}

export default Courses
