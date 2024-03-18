import logo from './logo.svg';
import './App.css';
import Login from './componentz/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
        
        <BrowserRouter>
        <Routes>

          <Route  path='/' element={<Login/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
