import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import ConditionalComp from './components/ConditionalComp';
import SuperheroCheckBox from './components/SuperheroCheckbox';
import { useEffect, useState } from 'react';
import SideEffectDemo from './components/SideEffectDemo';
import ToggleParagraph from './components/ToggleParagraph';
import WelcomeComp from './components/WelcomeComp';
import LastLetterCapitalize from './components/LastLetterCapitalize';
import CountAnd from './components/CountAnd';

//list of superheros
const superheroes = [
  { id: "a2jdkjd", name: "Winter Soldier" },
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" },
  { id: "b3dkdj3", name: "Spider Man" },
  { id: "b3dkdj4", name: "Shakti Maan" },
  { id: "b3dkdj5", name: "Goku" }
];

function App() {
  const [shuffleHero, setShuffleHero] = useState(superheroes);

  function handleShuffle(){
    let randomArr = [...superheroes].sort(()=>Math.random()-0.5);
    setShuffleHero(randomArr);
  }
  return (
    <div className="App">
      {/* <CounterApp data={1} name='Company A'/>
      <hr/>
      <CounterApp data={5} name='Company B'/> */}
      {/* <UncontrolledForm/> */}
      {/* <ControlledForm/> */}
      {/* <ConditionalComp/> */}
      {/* <SuperheroCheckBox name={superheroes[0].name}/>
      <SuperheroCheckBox name={superheroes[1].name}/>
      <SuperheroCheckBox name={superheroes[2].name}/> */}
      {/* {shuffleHero.map((hero)=>(
        <SuperheroCheckBox key={hero.id} name={hero.name}/>
      ))}
      <button onClick={handleShuffle}>Suffle Superheros</button> */}
      {/* <SideEffectDemo/> */}
      <ToggleParagraph/>
      <WelcomeComp isLoggedIn={false}/>
      <LastLetterCapitalize text="hello world"/>
      <CountAnd/>
    </div>
  );
}

export default App;
