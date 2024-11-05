import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login/Login';
import { Home } from './pages/HomePage/Home';
import { Cadastro } from './pages/Cadastro/Cadastro'
import { Navbar } from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';
import { LoginComponent } from './component/componentLogin/LoginComponent'
// import { ProdutosMasculinos, ProdutosFemininos, ProdutosInfantis, Calcados } from './pages';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        {/* <Route path='/masculino' component={ProdutosMasculinos} />
        <Route path='/feminino' component={ProdutosFemininos} />
        <Route path='/infantil' component={ProdutosInfantis} />
        <Route path='/calcados' component={Calcados} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;