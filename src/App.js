import logo from './logo.svg';
import './App.css';
import Login from './componentz/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationUser from './componentz/RegistrationUser';

function App() {
  return (
    <div >
        
        <BrowserRouter>
        <Routes>

          <Route  path='/' element={<Login/>}/>
          <Route  path='/register' element={<RegistrationUser/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
