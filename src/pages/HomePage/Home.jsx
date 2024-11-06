import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import "./Home.css";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/produtos");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };
  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <body className="body_home">
      <div className="home">
      <img className="outdor" src="./src/assets/outdor.png" alt="Outdoor da Loja" />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.imgurl} alt={product.nome} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.nome}</h3>
              <p className="product-price">R$ {product.preco}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.imgurl}
              alt={selectedProduct.nome}
              className={`popup-image ${zoomed ? "zoomed" : ""}`}
              onClick={toggleZoom}
            />
            <div className="popup-details">
              <h2>{selectedProduct.nome}</h2>
              <p>R$ {selectedProduct.preco}</p>

              <div className="size-selection">
                <h3>Selecione o tamanho:</h3>
                <div className="size-buttons">
                  <button className="size-button">P</button>
                  <button className="size-button">M</button>
                  <button className="size-button">G</button>
                  <button className="size-button">GG</button>
                </div>
              </div>
              <input
                onClick={closePopup}
                className="botao-excluir"
                type="submit"
                value="X"
              />
              <button
                onClick={() => {
                  addToCart(selectedProduct), closePopup();
                }}
                className="buy-button"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </body>
  );
}
