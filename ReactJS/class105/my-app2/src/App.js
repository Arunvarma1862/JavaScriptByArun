import logo from './logo.svg';
import './App.css';
import  {useState} from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [value, setfirst] = useState(0)
  return (
    
    <div className="App">
      <Navbar logoText='codewithharry'/>
    <div className="value"> {value}</div>
    <button onClick={()=>{setfirst(value+1)}}>Click me</button>
    <Footer/>
    </div>
  );
}

export default App;
