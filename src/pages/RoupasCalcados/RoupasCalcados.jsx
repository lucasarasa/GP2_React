import React, { useState } from 'react';
import './RoupasCalcados.css';

const RoupasCalcados = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [zoomed, setZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 1, name: "Tenis Nike Sport", price: "R$ 599,99", image: '/src/Roupas-Categorias/Calcados/1.webp' },
        { id: 2, name: "Tenis Redley", price: "R$ 178,90", image: '/src/Roupas-Categorias/Calcados/2.webp' },
        { id: 3, name: "Tenis Qix Combat", price: "R$ 299,90", image: '/src/Roupas-Categorias/Calcados/3.webp' },
        { id: 4, name: "Sapato Scarpin Feminino Salto Alto Fino", price: "R$ 132,90", image:'/src/Roupas-Categorias/Calcados/4.webp' },
        { id: 5, name: "Bota Chelsea Colcci Lettering Preta", price: "R$ 99,99", image: '/src/Roupas-Categorias/Calcados/5.webp'},
        { id: 6, name: "Sandalia Feminina Salto Alto Fino", price: "R$ 107,48", image: '/src/Roupas-Categorias/Calcados/6.webp' },
        { id: 7, name: "Bota Infantil Metalizada com Orelinhas", price: "R$ 149,90", image:'/src/Roupas-Categorias/Calcados/7.webp' },
        { id: 8, name: "Bota Infantil Bibi Urban Cinza", price: "R$ 259,90", image: '/src/Roupas-Categorias/Calcados/8.webp' },
        { id: 9, name: "Bota Infantil Bibi Urban Jeans", price: "R$ 289,90", image: '/src/Roupas-Categorias/Calcados/9.webp' },
        { id: 10, name: "Sapato Feminino Narkst Preto", price: "R$ 199,90", image: '/src/Roupas-Categorias/Calcados/10.webp' },
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

    // Funções do carrossel
    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % products.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    };

    return (
        <section className="mens-clothing">
            <h1 className="page-title">Calçados</h1>
            <div className="carousel-container">
                <button className="carousel-button" onClick={goToPreviousSlide}>❮</button>
                <div className="product-card" onClick={() => handleProductClick(products[currentIndex])}>
                    <img src={products[currentIndex].image} alt={products[currentIndex].name} className="product-image" />
                    <div className="product-info">
                        <h3 className="product-name">{products[currentIndex].name}</h3>
                        <p className="product-price">{products[currentIndex].price}</p>
                    </div>
                </div>
                <button className="carousel-button" onClick={goToNextSlide}>❯</button>
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
                                    <button className="size-button">34 - 35</button>
                                    <button className="size-button">36 - 37</button>
                                    <button className="size-button">38 - 39</button>
                                    <button className="size-button">40 - 41</button>
                                    <button className="size-button">42 - 43</button>
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

export default RoupasCalcados;
