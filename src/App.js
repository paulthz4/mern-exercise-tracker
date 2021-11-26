import './App.css';
import Header from "./components/Header";
import Day from './components/Day';
import NewDay from './components/NewDay';

function App() {
let str = "hi";
  return (
  <div>
    <Header/>
    <Day>
      <NewDay text={str}/>
      <p>{str}</p>
    </Day>
  </div> 
  );
}

export default App;
