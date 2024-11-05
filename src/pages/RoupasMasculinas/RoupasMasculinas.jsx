import React, { useState } from 'react';
import './RoupasMasculinas.css';

const RoupasMasculinas = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [zoomed, setZoomed] = useState(false);

    const products = [
        { id: 1, name: "Camisa em Tricoline Acetinada com Gola Padre Branco", price: "R$ 79,90", image: '/src/Roupas-Categorias/Masculino/1.webp' },
        { id: 2, name: "Bermuda Esportiva com Cordão Interno e Lettering Refletivo Azul Marinho", price: "R$ 129,90", image: '/src/Roupas-Categorias/Masculino/2.webp' },
        { id: 3, name: "Camiseta Polo Comfort em Algodão Peruano Preto", price: "R$ 299,90", image: '/src/Roupas-Categorias/Masculino/3.webp' },
        { id: 4, name: "Bermuda em Microfibra com Cós Elástico e Estampa Floral de Girassol Preto", price: "R$ 149,90", image: '/src/Roupas-Categorias/Masculino/4.webp' },
        { id: 5, name: "Camisa Comfort em Algodão com Estampa Xadrez e Manga Longa Azul/ Preto/ Off White", price: "R$ 49,90", image: '/src/Roupas-Categorias/Masculino/5.webp' },
        { id: 6, name: "Calça Loose em Jeans com Bolsos Azul", price: "R$ 89,90", image: '/src/Roupas-Categorias/Masculino/6.webp' },
        { id: 7, name: "Polo com Gola Lapela sem Botão e Textura Canelada Vermelho Vinho", price: "R$ 159,90", image: '/src/Roupas-Categorias/Masculino/7.webp' },
        { id: 8, name: "Calça Wide Alfaiataria com Cós Bege", price: "R$ 79,90", image: '/src/Roupas-Categorias/Masculino/8.webp' },
        { id: 9, name: "Regata Regular Esportiva com Tecnologia Dry e Estampa Heat Print Verde", price: "R$ 99,90", image: '/src/Roupas-Categorias/Masculino/9.webp' },
        { id: 10, name: "Casaco Básico em Moletom com Capuz e Zíper Frontal Preto", price: "R$ 199,90", image: '/src/Roupas-Categorias/Masculino/10.webp' },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert('Você está inscrito na newsletter!');
    };

    return (
        <section className="mens-clothing">
            <h1 className="page-title">Roupas Masculinas</h1>
            <div className="product-container">
                <div className="top-section">
                    <h2 className="section-title">Título da Seção</h2>
                    <p>NÃO SEI AINDA O QUE INSERIR</p>
                </div>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedProduct.image} 
                            alt={selectedProduct.name} 
                            className={`popup-image ${zoomed ? 'zoomed' : ''}`} 
                            onClick={toggleZoom}
                        />
                        <div className="popup-details">
                            <h2>{selectedProduct.name}</h2>
                            <p>{selectedProduct.price}</p>

                            <div className="size-selection">
                                <h3>Selecione o tamanho:</h3>
                                <div className="size-buttons">
                                    <button className="size-button">P</button>
                                    <button className="size-button">M</button>
                                    <button className="size-button">G</button>
                                    <button className="size-button">GG</button>
                                </div>
                            </div>

                            <button onClick={closePopup}>Fechar</button>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="newsletter-container">
                <h2>Receba ofertas e novidades por e-mail</h2>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">*Digite seu nome</label>
                        <input type="text" id="name" required />
                        <span className="error-message">Este campo é obrigatório</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">*E-mail</label>
                        <input type="email" id="email" required />
                        <span className="error-message">Este campo é obrigatório</span>
                    </div>
                    <button type="submit" className="subscribe-button">Inscrever-se</button>
                </form>
            </div>
            <div className="whatsapp-container">
                <h2>Fale conosco pelo WhatsApp:</h2>
                <p>+55 11 99999-9999</p>
            </div>
        </section>
    );
};

export { RoupasMasculinas };
