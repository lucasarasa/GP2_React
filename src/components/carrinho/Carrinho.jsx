import './Carrinho.css'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Carrinho() {
    const { cart } = useContext(CartContext);
    const [ produtos, setProdutos ] = useState([]);
    useEffect(() => {
        setProdutos(cart);
        console.log("veio",cart);
},[cart])

    return (
        <>
        <div className="box-carrinho">
            <p>Items do carrinho</p>
            {produtos.length > 0 && produtos.map((item) => (
                <div key={item.id}>
                    <p>{item.nome}</p>
                </div>
            ))}
        </div>
        </>
    )
}