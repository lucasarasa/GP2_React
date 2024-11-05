import './Carrinho.css'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Carrinho() {
    const [ count, setCount ] = useState(0);
    const { cart } = useContext(CartContext);
    const [ produtos, setProdutos ] = useState([]);

    useEffect(() => {
        setProdutos(cart);
        console.log("veio",cart);
    },[cart])

    const handleExcluirClick = (index) => {
        setProdutos(produtos.filter((value, i) => i != index));
    }

    return (
        <>
        <div className="box-carrinho">
            <p>Items do carrinho</p>
            {produtos.length > 0 && produtos.map((item, index) => (
                <div className="box-carrinho-produtos" key={item.id + '-' + index}>
                    <div className='box-carrinho-produtos-img'>
                        <img src={item.imgurl}/>
                        <p>{item.nome}</p>
                    </div>
                    <div className='box-carrinho-produtos-bot'>
                    <p>R${item.preco}</p>
                    <input className='input-comprar' type="submit" value={"comprar"} />
                    <input onClick={() => {handleExcluirClick(index)}} className='input-excluir' type="submit" value={"excluir"} />
                    <div className='box-carrinho-quantidade'>
                    <button>{count}</button>
                        <div  className='box-carrinho-aum-dim'>
                            <button onClick={() => setCount(count > 0 ? count - 1 : count)}>-</button>
                            <button onClick={() => setCount(count >= 0 ? count + 1 : count)}>+</button>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}