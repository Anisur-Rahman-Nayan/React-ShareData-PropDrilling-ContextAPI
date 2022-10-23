import './App.css';
import { Route, Routes } from 'react-router-dom';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Grandpa></Grandpa>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
