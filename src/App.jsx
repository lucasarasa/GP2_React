import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/HomePage/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { RoupasMasculinas } from "./pages/RoupasMasculinas/RoupasMasculinas";
import { RoupasFemininas } from "./pages/RoupasFemininas/RoupasFemininas";
import { Carrinho } from "./components/carrinho/Carrinho";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/masculino" component={RoupasMasculinas} />
        <Route path="/feminino" component={RoupasFemininas} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
