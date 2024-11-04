import './Home.css';

export function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à nossa Loja</h1>
      <div className="options">
        <div className="option">Roupas Masculinas</div>
        <div className="option">Roupas Femininas</div>
        <div className="option">Roupas Infantis</div>
        <div className="option">Calçados</div>
      </div>
    </div>
  );
}
