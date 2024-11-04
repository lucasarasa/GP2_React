import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
