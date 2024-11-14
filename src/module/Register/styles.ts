import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Title = styled.h1`
    font-family: 'Righteous', cursive;
`;

export const Caixa = styled.div`
    display: flex;
    background-color: rgb(245, 245, 245);
    border: 5px solid rgb(16, 135, 232);
    width: 500px;
    height: 550px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;
    gap: 20px;
`;

export const CustomTextField = styled(TextField)`
    width: 70%;
    background-color: white;
`;  

export const CustomAdressEmail = styled(TextField)`
    width: 70%;
    background-color: white;
`;

export const CreatePassword = styled(TextField)`
    width: 70%;
    background-color: white;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;