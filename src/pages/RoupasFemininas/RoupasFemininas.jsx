import React, { useState } from "react";
import "./RoupasFemininas.css";

const RoupasFemininas = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const products = [
    {
      id: 1,
      name: "Camisa Alongada em Tricoline Listrado com Elástico no Punho Azul",
      price: "R$ 139,90",
      image: "/src/Roupas-Categorias/Feminino/1.webp",
    },
    {
      id: 2,
      name: "Bermuda Reta em Jeans Denim com Bolsos Azul",
      price: "R$ 99,90",
      image: "/src/Roupas-Categorias/Feminino/2.webp",
    },
    {
      id: 3,
      name: "Blusa de Alça em Viscose com Linho e Bordado Tropical Laranja",
      price: "R$ 69,90",
      image: "/src/Roupas-Categorias/Feminino/3.webp",
    },
    {
      id: 4,
      name: "Vestido Curto em Viscose e Linho com Estampa com Amarração na Alça Preto",
      price: "R$ 159,90",
      image: "/src/Roupas-Categorias/Feminino/4.webp",
    },
    {
      id: 5,
      name: "Camiseta Alongada em Algodão com Lettering Barcelona Verde",
      price: "R$ 59,90",
      image: "/src/Roupas-Categorias/Feminino/5.webp",
    },
    {
      id: 6,
      name: "Calça Cenoura Alfaiatada com Cintinho em Material Sintético Preto",
      price: "R$ 219,90",
      image: "/src/Roupas-Categorias/Feminino/6.webp",
    },
    {
      id: 7,
      name: "Blusa em Viscose com Decote V e Manga Curta Dobrada Azul",
      price: "R$ 79,90",
      image: "/src/Roupas-Categorias/Feminino/7.webp",
    },
    {
      id: 8,
      name: "Vestido New Midi em Laise com Bordado no Busto Laranja",
      price: "R$ 329,90",
      image: "/src/Roupas-Categorias/Feminino/8.webp",
    },
    {
      id: 9,
      name: "Calça Cenoura em Alfaiataria com Detalhe de Botão na Barra Azul Escuro",
      price: "R$ 229,90",
      image: "/src/Roupas-Categorias/Feminino/9.webp",
    },
    {
      id: 10,
      name: "Blusa em Viscose com Recorte Oval nas Costas e Textura Canelada Preto",
      price: "R$ 89,90",
      image: "/src/Roupas-Categorias/Feminino/10.webp",
    },
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
    alert("Você está inscrito na newsletter!");
  };

  return (
    <section className="mens-clothing">
      <h1 className="page-title">Roupas Femininas</h1>
      <div className="product-container">
        <div className="top-section">
          <h2 className="section-title">Título da Seção</h2>
          <p>NÃO SEI AINDA O QUE INSERIR</p>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
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
              className={`popup-image ${zoomed ? "zoomed" : ""}`}
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
          <button type="submit" className="subscribe-button">
            Inscrever-se
          </button>
        </form>
      </div>
      <div className="whatsapp-container">
        <h2>Fale conosco pelo WhatsApp:</h2>
        <p>+55 11 99999-9999</p>
      </div>
    </section>
  );
};

export { RoupasFemininas };
