// import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login/Login';
import { Home } from './pages/HomePage/Home';
import { Cadastro } from './pages/Cadastro/Cadastro'
import { Navbar } from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';
import { LoginComponent } from './components/componentLogin/LoginComponent'

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