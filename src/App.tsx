import './App.css'
import { Signin } from './components/Signin'
import logo from './logo.svg'

function App() {
  return (
    <div>
      <Signin />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default App
