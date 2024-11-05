import './Carrinho.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { api } from '../../api/api';

export function Carrinho() {
    const { cart, removeFromCart, updateQuantity, emptyCart } = useContext(CartContext);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setProdutos(cart);
        console.log("Produtos no carrinho:", cart);
    }, [cart]);

    const handleExcluirClick = (productId) => {
        removeFromCart(productId);
    };

    const atualizaEstoque = async (productId, quantidade) => {
        try {
            const response = await api.get(`/produtos/${productId}`);
            const produtoAtual = response.data;
            const novaQuantidade = produtoAtual.quantidade - quantidade;
            await api.patch(`/produtos/${productId}`, { quantidade: novaQuantidade });
            console.log("Estoque atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar estoque:", error);
        }
    };

    const handleEstoqueClick = async (item, delta) => {
        const newQuantity = item.quantity + delta;

        if (newQuantity < 1) {
            removeFromCart(item.id);
            return;
        }

        try {
            const response = await api.get(`/produtos/${item.id}`);
            const produto = response.data;

            if (delta > 0 && produto.quantidade < delta) {
                alert("Estoque insuficiente para esta operação.");
                return;
            }

            updateQuantity(item.id, newQuantity);
            await atualizaEstoque(item.id, delta);
        } catch (error) {
            console.error("Erro ao verificar estoque:", error);
        }
    };

    const handleFinalizarCompra = async () => {
        try {
            const valorTotal = produtos.reduce((total, item) => total + item.preco * item.quantity, 0);
            const pedido = {
                idUser: "idDoUsuario",
                valorTotal: valorTotal,
                itens: produtos.map(item => ({
                    idProduto: item.id,
                    quantidade: item.quantity
                }))
            };

            await api.post('/pedidos', pedido);
            emptyCart();
            alert("Compra finalizada com sucesso!");
            navigate('/pedidos');
        } catch (error) {
            console.error("Erro ao finalizar compra:", error);
            alert("Ocorreu um erro ao finalizar a compra. Tente novamente.");
        }
    };

    return (
        <div className="box-carrinho">
            <p>Itens do carrinho</p>
            {produtos.length > 0 ? (
                produtos.map((item) => (
                    <div className="box-carrinho-produtos" key={item.id}>
                        <div className='box-carrinho-produtos-img'>
                            <img src={item.imgurl} alt={item.nome} />
                            <p>{item.nome}</p>
                        </div>
                        <div className='box-carrinho-produtos-bot'>
                            <p>R$ {item.preco.toFixed(2)}</p>
                            <input className='input-comprar' type="submit" value="comprar" />
                            <input
                                onClick={() => handleExcluirClick(item.id)}
                                className='input-excluir'
                                type="submit"
                                value="excluir"
                            />
                            <div className='box-carrinho-quantidade'>
                                <p>Quantidade: {item.quantity}</p>
                                <div className='box-carrinho-aum-dim'>
                                    <button onClick={() => handleEstoqueClick(item, -1)}>-</button>
                                    <button onClick={() => handleEstoqueClick(item, 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Seu carrinho está vazio.</p>
            )}
            {produtos.length > 0 && (
                <div className="carrinho-actions">
                    <button onClick={emptyCart} className="empty-cart-button">Esvaziar Carrinho</button>
                    <button onClick={handleFinalizarCompra} className="finalizar-compra-button">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
}