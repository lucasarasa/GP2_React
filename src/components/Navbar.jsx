import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { Carrinho } from "./carrinho/Carrinho";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isCarrinhoVisible, setIsCarrinhoVisible] = useState(false);

    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleCarrinho = (e) => {
        e.preventDefault();
        setIsCarrinhoVisible(!isCarrinhoVisible);
    };

    useEffect(() => {
        if (location.pathname === '/login') {
            setIsCarrinhoVisible(false);
        }
    }, [location]);

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
                
                {location.pathname !== '/login' && (
                    <li>
                        <Link to="#" onClick={toggleCarrinho}>
                            {isCarrinhoVisible ? 'Fechar Carrinho' : 'Abrir Carrinho'}
                        </Link>
                    </li>
                )}

                <li><Link to="/login">Login</Link></li>
            </ul>

            {isCarrinhoVisible && <Carrinho />}
        </nav>
    );
}
