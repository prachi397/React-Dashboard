import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="App">
      <CounterApp data={1} name='Company A'/>
      <hr/>
      <CounterApp data={5} name='Company B'/>
    </div>
  );
}

export default App;
