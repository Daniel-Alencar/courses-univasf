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
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: 100px 100px; 
    grid-gap: 50px 50px;
    align-self: center;
    justify-self: center;
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
