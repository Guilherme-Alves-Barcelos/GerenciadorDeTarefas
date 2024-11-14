import styled from "styled-components";

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
    height: 450px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;
    gap: 15px;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const Titulo = styled.h1`
    font-size: 30px;
    font-family: 'Righteous', sans-serif;
`;

export const SecondTitle = styled.h4`
    font-family: 'Righteous', sans-serif;
`;

export const LinkCadastro = styled.a`
    font-family: 'Righteous', sans-serif;
    color: rgb(16, 135, 232);
`;

