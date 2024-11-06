import React, { useState } from 'react';
import './NovaColecao.css';

const NovaColecao = () => {
  const imagens = [
    'https://i.ibb.co/D9JMXHj/Imagem-do-Whats-App-de-2024-11-06-s-14-25-00-ae19809d.jpg',
    'https://i.ibb.co/GcRk18p/Imagem-do-Whats-App-de-2024-11-06-s-14-53-41-61d693f7.jpg',
    'https://i.ibb.co/0Y1dbWb/Imagem-do-Whats-App-de-2024-11-06-s-15-36-25-daa79296.jpg',
    'https://i.ibb.co/hgqVp3J/Imagem-do-Whats-App-de-2024-11-06-s-15-30-54-cd661213.jpg',
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="nova-colecao">
      <h1>Nova Coleção - Verão 2025</h1>
      <div className="carrossel">
        <button onClick={prevImage} className="prev">←</button>
        <img src={imagens[index]} alt={`Imagem ${index + 1}`} />
        <button onClick={nextImage} className="next">→</button>
      </div>
      <div className="descricao">
        <p>Confira os produtos incríveis que em breve vão chegar a nossa loja! Explore a nova coleção de roupas para entrar com chave de ouro o ano de 2025</p>
      </div>
      <div className="whatsapp-container">
        <h2>Fale conosco pelo WhatsApp:</h2>
        <a
          href="https://wa.me/5524992488104"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img
            src="https://img.icons8.com/win10/200/FFFFFF/whatsapp.png"
            alt="Ícone do WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
    
  );
};

export { NovaColecao };
