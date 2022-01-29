
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Raju">We are good</Greet>
      <Greet name ="DJ">We are bad</Greet>
      <Greet name="Kaju">All are good</Greet>
      <Welcome name="DK"/>
    </div>
  );
}

export default App;
