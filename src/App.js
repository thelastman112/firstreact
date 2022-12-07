import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello React!</h1>
      <button className='p-5 bg-red-300' >Click</button>
      <a href='/Login'>LoginA</a>
      <Link to={"/Login"}>LoginLink</Link>
    </div>
  );
}

export default App;
