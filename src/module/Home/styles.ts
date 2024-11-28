import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px; /* Evita conteúdo colado nas bordas em telas menores */

    @media (max-width: 768px) { /* Tablets */
        height: auto;
        padding: 20px;
    }

    @media (max-width: 480px) { /* Smartphones */
        padding: 15px;
    }
`;

export const Caixa = styled.div`
    display: flex;
    background-color: rgb(245, 245, 245);
    border: 5px solid rgb(16, 135, 232);
    width: 500px;
    max-width: 100%; /* Ajusta para caber em telas menores */
    height: 450px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;
    gap: 15px;
    padding: 20px; /* Adiciona espaçamento interno */

    @media (max-width: 768px) { /* Tablets */
        width: 90%;
        height: auto; /* Ajusta a altura dinamicamente */
        padding: 15px;
        gap: 10px;
    }

    @media (max-width: 480px) { /* Smartphones */
        width: 100%;
        padding: 10px;
        gap: 8px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    @media (max-width: 768px) { /* Tablets */
        flex-direction: column; /* Empilha itens em telas menores */
        gap: 8px;
    }

    @media (max-width: 480px) { /* Smartphones */
        gap: 6px;
    }  
`;

export const Titulo = styled.h1`
    font-size: 30px;
    font-family: 'Righteous', sans-serif;
    text-align: center;

    @media (max-width: 768px) { /* Tablets */
        font-size: 24px;
    }

    @media (max-width: 480px) { /* Smartphones */
        font-size: 20px;
    }
`;

export const SecondTitle = styled.h4`
    font-family: 'Righteous', sans-serif;
    font-size: 18px;

    @media (max-width: 768px) { /* Tablets */
        font-size: 16px;
    }

    @media (max-width: 480px) { /* Smartphones */
        font-size: 14px;
    }
`;

export const LinkCadastro = styled.a`
    font-family: 'Righteous', sans-serif;
    color: rgb(16, 135, 232);
    font-size: 16px;
    text-align: center;

    @media (max-width: 768px) { /* Tablets */
        font-size: 14px;
    }

    @media (max-width: 480px) { /* Smartphones */
        font-size: 12px;
    }
`;

