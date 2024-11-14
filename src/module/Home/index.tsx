import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../componentes/button";
import { AdressEmail } from "../../componentes/Inputs/AdressEmail";
import { Password } from "../../componentes/Inputs/Password";
import { Caixa, Container, LinkCadastro, SecondTitle, SubContainer, Titulo } from "./styles"
import { useState } from "react";
import axios from "axios";



export const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEnter = () => {
        navigate("/tasks");
    }

    return (
        <Container>
            <Caixa>
                <Titulo>Gerenciador de Tarefas</Titulo>
                <AdressEmail />
                <Password />
                <CustomButton label={"Entrar"} onClick={handleEnter}/>
                <SubContainer>
                    <SecondTitle>Não tem uma conta?</SecondTitle>
                    <LinkCadastro as={Link} to="/register">Cadastre-se</LinkCadastro>
                </SubContainer>
            </Caixa>
        </Container>
    )
};