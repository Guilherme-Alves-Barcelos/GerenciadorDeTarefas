import { Button } from "@mui/material";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
};

export const CustomButton = ({label,disabled, onClick} : ButtonProps) => { 
    return (
     <Button variant="contained"  onClick= {onClick} disabled={disabled}>{label}</Button>
    );
}
