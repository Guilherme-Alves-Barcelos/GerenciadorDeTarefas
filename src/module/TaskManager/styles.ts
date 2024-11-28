import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Caixa = styled.div`
    display: flex;
    background-color: rgb(245, 245, 245);
    border: 5px solid rgb(16, 135, 232);
    width: 500px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;
    gap: 20px;

    @media (max-width: 768px) { /* Tablets */
        width: 90%;
        padding: 20px;
    }

    @media (max-width: 480px) { /* Smartphones */
        width: 100%;
        border: none;
        gap: 15px;
    }

`;

export const Title = styled.h1`
    font-family: 'Righteous', cursive;

     @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const NewTask = styled(TextField)`
    width: 70%;
    background-color: white;
    font-family: 'Righteous', sans-serif;
    gap: 10px;

     @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const AddTask = styled(AddCircleIcon)`
    color: rgb(16, 135, 232);
    cursor: pointer;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const TextTask = styled.p`
    font-family: 'Righteous', sans-serif;
    font-size: 16px;
`;

export const ContainerTask = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DeleteTask = styled(DeleteIcon)`
    display: flex;
    color: red;
    cursor: pointer;
`;

export const EditTask = styled(EditIcon)`
    display: flex;
    color: rgb(16, 135, 232);
    cursor: pointer;
`;

export const CheckTask = styled(CheckCircleIcon)`
    display: flex;
    color: green;
    cursor: pointer;
`;

export const SearchTask = styled(TextField)`
    background-color: white;
    width: 45%;
    background-color: white;
    font-family: 'Righteous', sans-serif;
    
`;

export const FilterTask = styled(TextField)`
    background-color: white;
    width: 45%;
    background-color: white;
    font-family: 'Righteous', sans-serif;
`;

export const CampFilterTask = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const TitleName = styled.p`
    font-family: 'Righteous', sans-serif;
`;