import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
     padding: 10px;

    @media (max-width: 768px) { /* Tablets */
        height: auto;
        padding: 20px;
    }

    @media (max-width: 480px) { /* Smartphones */
        padding: 10px;
    }
`;

export const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 245, 245);
    border: 5px solid rgb(16, 135, 232);
    width: 500px;
    max-width: 100%; /* Ajusta para telas menores */
    height: auto; /* Permite altura variável */
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;
    gap: 20px;

    @media (max-width: 768px) { /* Tablets */
        width: 90%;
        padding: 15px;
        gap: 15px;
    }

    @media (max-width: 480px) { /* Smartphones */
        width: 100%;
        padding: 10px;
        gap: 10px;
    }
`;

export const CustomTextField = styled(TextField)`
     width: 70%;
    max-width: 100%;
    background-color: white;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
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
    justify-content: space-between;
    gap: 30px;
    width: 100%;

    @media (max-width: 768px) { /* Tablets */
        flex-direction: column;
        gap: 15px;
    }

    @media (max-width: 480px) { /* Smartphones */
        gap: 10px;
    }
`;