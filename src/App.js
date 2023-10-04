import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Suala'
  const x = true
  return (
    <div className="container">
      <h1>Hello { name }</h1>
      <h2>Life is {x ? "Good" : "Bad"}</h2>
    </div>
  );
}

export default App;
