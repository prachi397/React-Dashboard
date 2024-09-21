import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import ConditionalComp from './components/ConditionalComp';

function App() {
  return (
    <div className="App">
      {/* <CounterApp data={1} name='Company A'/>
      <hr/>
      <CounterApp data={5} name='Company B'/> */}
      {/* <UncontrolledForm/> */}
      {/* <ControlledForm/> */}
      <ConditionalComp/>
    </div>
  );
}

export default App;
