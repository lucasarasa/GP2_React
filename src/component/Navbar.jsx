import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img src="./src/assets/logo.png" alt="Logo da Loja" />
            </Link>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                <li><Link to="/masculino">Roupas Masculinas</Link></li>
                <li><Link to="/feminino">Roupas Femininas</Link></li>
                <li><Link to="/infantil">Roupas Infantis</Link></li>
                <li><Link to="/calcados">Calçados</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
