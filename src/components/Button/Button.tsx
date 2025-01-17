import { ReactNode, MouseEventHandler } from "react";
import "./Button.css"
type ButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: ButtonProps) => {
    return <button className="button-element" onClick={onClick}>{children}</button>;
};

export default Button;
