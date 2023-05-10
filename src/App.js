import './App.css';
import Home from './Components/Home/Home';
import Sign_in from './Components/Sign_in/Sign_in';
import Sign_up from './Components/Sign_up/Sign_up';

function App() {
  return (
    <div>
      <Sign_in />
      <Sign_up />
      <Home />
    </div>
  );
}

export default App;
