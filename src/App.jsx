// App.jsx
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login/Login';
import { Home } from './pages/HomePage/Home';
import { Navbar } from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/masculino' component={() => <div>Roupas Masculinas</div>} />
        <PrivateRoute path='/feminino' component={() => <div>Roupas Femininas</div>} />
        <PrivateRoute path='/infantil' component={() => <div>Roupas Infantis</div>} />
        <PrivateRoute path='/calcados' component={() => <div>Calçados</div>} />
        <Route path='/cadastro' component={() => <div>Página de Cadastro</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
