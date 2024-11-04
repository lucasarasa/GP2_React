import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login/Login';
import { Home } from './pages/HomePage/Home';
import { Navbar } from './components/Navbar';
import { ProdutosMasculinos, ProdutosFemininos, ProdutosInfantis, Calcados, Cadastro } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/masculino' component={ProdutosMasculinos} />
        <Route path='/feminino' component={ProdutosFemininos} />
        <Route path='/infantil' component={ProdutosInfantis} />
        <Route path='/calcados' component={Calcados} />
        <Route path='/cadastro' component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
