import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const names = ['Juan', 'Gustavo', 'Gerly', 'Cassandra', 'Corwin', 'Jacques', 'Gianna', 'Emily', 'Fanessa', 'Adi', 'Mido', 'Cari', 'Captain Ed', 'Nick', 'Tyler', 'Todd']

function App() {
  const[myName, setMyName] = useState('Nick')
  const[counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty damn cool.
        </p>
        {names.map(name => (
          <button onClick={() => setMyName(name)}>{name}</button>
        ))}
        <button onClick={() => setMyName('Hello')}>Hello</button>
        <button onClick={() => setMyName('Goodbye')}>Goodbye</button>
        <button onClick={() => setMyName('Nick')}>Nick</button>
        <p>You clicked the button {counter} times.</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>0</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
