import styled from "styled-components";
import makeStyles  from "@material-ui/styles/makeStyles";

export const ContainerBody = styled.div`
    width: 100%;
    margin-top: auto;
    display: grid; 
    align-items: center;
    justify-content: center;
` 


export const ContainerGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 628px;
    
    align-self: center;
    justify-self: center;

    border: 2px red solid;
`;

export const useStyles = makeStyles((theme) => {
    return ({           
        root: {
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start" 
        },

        button: {
            padding: '30px', 
            textTransform: "none",
            margin: 4,  
            color: "#f1f1f1", 
            width: '200px',
            height: '100px', 
        },

        title: {
            marginBottom: theme.spacing(3),
            width: '100%',
            textAlign: 'center'
        }
    });
})
