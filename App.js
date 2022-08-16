import logo from './logo.svg';
import './App.css';
import Conversor from './componentes/Conversor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Moedas</h1>
        <div className='linha'>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className='linha'>
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
      </header>
    </div>
  );
}

export default App;
