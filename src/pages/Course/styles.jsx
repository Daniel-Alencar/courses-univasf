import styled from "styled-components";

export const ContainerGrid = styled.div`
    padding-left: 10px;
    padding-right: 10px;

    position: absolute;
    bottom: 40px;

    width: 100vw;
    height: calc(100vh - 64px - 35px - 40px);
    overflow-x: auto;
    overflow-y: auto;

    display: flex;
    /* justify-content: center; */

/* 
    &::-webkit-scrollbar-corner {
        border-radius: 50px;

        // border: 3px black solid;
    }
    &::-webkit-scrollbar-track {
        border-radius: 50px;

        // border: 3px green solid;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #00000026;

        border-radius: 50px;

        // border: 3px black solid;
    }
*/
    &::-webkit-scrollbar {
        display: none;
    }
/*
    &::-webkit-scrollbar-track-piece {
        background-color: #00000026;

        // border: 3px yellow solid;
    }
    &::-webkit-scrollbar-button {
        // border: 3px green solid;

        display: block;
        height: 5px;
        width: 5px;
    }
*/
`