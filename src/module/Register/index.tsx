import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../componentes/button";
import { Caixa, Container, CreatePassword, CustomAdressEmail, CustomTextField, SubContainer, Title } from "./styles";
import { useState } from "react";
import { ModalRegister } from "../../componentes/modal";

export const Register = () => {
    const navigate = useNavigate();
    
    // Estados para armazenar os dados do formulário
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro

    // Função para navegar de volta à página inicial
    const goHome = () => {
        navigate("/");
    };

    // Função para realizar o cadastro (sem contato com API)
    const handleRegister = () => {
        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem.");
            return;
        }

        // Limpa a mensagem de erro, caso exista
        setErrorMessage("");

        // Exibe o modal após cadastro simulado bem-sucedido
        setOpenModal(true);
    };

    // Verifica se todos os campos obrigatórios estão preenchidos
    const isFormValid = name !== "" && email !== "" && password !== "" && confirmPassword !== "";

    return (
        <Container>
            <Caixa>
                <Title>Cadastre seu usuário</Title>
                <CustomTextField
                    id="outlined-name"
                    label="Nome"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <CustomAdressEmail
                    id="outlined-email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CreatePassword
                    id="outlined-password"
                    label="Senha"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CreatePassword
                    id="outlined-confirm-password"
                    label="Confirme sua Senha"
                    variant="outlined"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* Exibe mensagem de erro, se houver */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <SubContainer>
                    <CustomButton label={"Voltar"} onClick={goHome} />
                    {/* Desabilitar botão "Cadastrar" se o formulário não for válido */}
                    <CustomButton 
                        label={"Cadastrar"} 
                        onClick={handleRegister} 
                        disabled={!isFormValid} 
                    />
                </SubContainer>
            </Caixa>

            {/* Componente Modal */}
            <ModalRegister
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                    navigate("/"); // Navega para a página inicial após fechar o modal
                }}
            />
        </Container>
    );
};
