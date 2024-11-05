import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login/Login';
import { Home } from './pages/HomePage/Home';
import { Navbar } from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';
import { RoupasMasculinas } from './pages/RoupasMasculinas/RoupasMasculinas';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/masculino' component={RoupasMasculinas} />
        <PrivateRoute path='/feminino' component={() => <div>Roupas Femininas</div>} />
        <PrivateRoute path='/infantil' component={() => <div>Roupas Infantis</div>} />
        <PrivateRoute path='/calcados' component={() => <div>Calçados</div>} />
        <Route path='/cadastro' component={() => <div>Página de Cadastro</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
