import React from "react"
import { useStyles } from "./styles"; 
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

// icons
import { BsBuilding  } from "react-icons/bs"; 
import { BsFillCpuFill } from "react-icons/bs";
import { GiSatelliteCommunication } from "react-icons/gi";

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
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>
                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>
                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>
                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>
                    <Button 
                        startIcon={<BsFillCpuFill />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/1')}
                    >
                        Engenharia de Computação
                    </Button>

                    {/* TODO: ADD NEW COURSES */}

                    {/* 
                    <Button 
                        startIcon={<BsBuilding />} 
                        className={classes.button} 
                        color="primary" 
                        variant="contained"
                        onClick={() => history.push('/course/2')}
                    >
                        Construção de Edifícios
                    </Button>
                    */}
        
    
                </ContainerGrid>
            </ContainerBody>
            <Footer />  
        </div>
    )
}

export default Courses
