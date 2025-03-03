import { Link } from "react-router-dom";

const Button = () => {
    return <button>Meu botão</button>
}

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to= "/entrar">Login</Link>
            
            <Button />
        </div>
    );
}
