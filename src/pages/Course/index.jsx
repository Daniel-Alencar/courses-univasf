import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import makeStyles  from '@material-ui/styles/makeStyles';
import LinearProgressWithLabel from '../../components/Progress';
import Header from '../../components/Header';
import Grid from '../../containers/Grid';
import Footer from '../../components/Footer'
import { ContainerGrid } from './styles';


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
            alignItems: 'flex-start' 
        },
    });
})

export default function Course({paletteType, setPaletteType}) {
    
    
    const { id } = useParams(); 
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
        const updateProgress = timeWorked * 100 / workTime; 
        localStorage.setItem(`progress:${id}`, updateProgress);
        setProgress(updateProgress)
    }

    return (
        <div className={classes.root}>
            <Header 
                paletteType={paletteType} 
                setPaletteType={setPaletteType} 
                title={courseName}
            />
            <ContainerGrid> 
                <LinearProgressWithLabel value={progress} id={id} />
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
