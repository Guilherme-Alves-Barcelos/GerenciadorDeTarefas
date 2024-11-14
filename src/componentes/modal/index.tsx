import { Button } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom"; // Importa o useNavigate

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalRegister = ({ open, onClose }: { open: boolean, onClose: () => void }) => { 
    const navigate = useNavigate(); // Declaração do useNavigate

    const handleCloseAndNavigate = () => {
        onClose(); // Fecha o modal
        navigate("/"); // Redireciona para Home
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseAndNavigate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Cadastro Concluído
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Seu usuário foi cadastrado com sucesso!
                </Typography>
                <Button onClick={handleCloseAndNavigate}>Fechar</Button>
            </Box>
        </Modal>
    );
};
