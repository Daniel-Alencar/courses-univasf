import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import makeStyles  from '@material-ui/styles/makeStyles';
import LinearProgressWithLabel from '../../components/Progress';
import Header from '../../components/Header';
import Grid from '../../containers/Grid';
import Footer from '../../components/Footer'
import { ContainerGrid } from './styles';
import { useHistory } from "react-router";



import courses from '../../data'; 
import { getTimeWorked, recoverProgress } from '../../services';

const useStyles = makeStyles((theme, id) => {
    return ({
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        teste: { 
            height: 150,
            width: '100%',
            backgroundColor: theme.palette.background.default,
        }
    });
})

export default function Course({paletteType, setPaletteType}) {
    
    const history = useHistory();
    const { key } = useParams();
    const id = key;
    const classes = useStyles(id);
    const [course, setCourse] = useState(courses[id]); 
    const [progress, setProgress] = useState(recoverProgress(id));
    const { name: courseName } = course;  

    
    useEffect(() => {
        setCourse(courses[id]); 
    }, [id])


    const updateProgress = (succeed) => {
        const { workTime, components } = course; 
        let timeWorked = getTimeWorked(components, succeed);
        
        // console.log(`Horas concluídas: ${timeWorked}`);

        const updateProgressNumber = Math.ceil(timeWorked * 100.0 / workTime); 
        localStorage.setItem(`progress:${id}`, updateProgressNumber);
        setProgress(updateProgressNumber)
    }

    const resetProgress = () => {
        localStorage.setItem(`progress:${id}`, 0);
        setProgress(0);
        
        history.go(0);
    }

    return (
        <div className={classes.root}>
            <Header 
                paletteType={paletteType} 
                setPaletteType={setPaletteType} 
                title={courseName}
            >
            </Header>
            <LinearProgressWithLabel 
                resetFunction={resetProgress} 
                value={progress} 
                id={id} 
            />
            <ContainerGrid> 
                <Grid 
                    id={id} 
                    course={course} 
                    updateProgress={updateProgress}
                    progress={progress}
                />
            </ContainerGrid>
            <Footer />
        </div>
    )
}
