import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="./src/assets/logo.png" alt="Logo da Loja" />
                </Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/masculino">Roupas Masculinas</Link></li>
                <li><Link to="/feminino">Roupas Femininas</Link></li>
                <li><Link to="/infantil">Roupas Infantis</Link></li>
                <li><Link to="/calcados">Calçados</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
