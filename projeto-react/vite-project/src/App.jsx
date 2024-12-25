import './App.css';
import HelloWorld from './components/HelloWorld.jsx';
function App() {

  const name = 'Gustavo';

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholdere.com/150';

  return (
    <div className='App'>
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {newName}</p>
      <p>Soma {sum(2,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
