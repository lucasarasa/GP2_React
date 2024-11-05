import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/HomePage/Home';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { RoupasMasculinas } from './pages/RoupasMasculinas/RoupasMasculinas';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path='/masculino' component={RoupasMasculinas} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
