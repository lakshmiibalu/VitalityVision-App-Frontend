import logo from './logo.svg';
import './App.css';
import Login from './componentz/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationUser from './componentz/RegistrationUser';
import DetailsUser from './componentz/DetailsUser';

function App() {
  return (
    <div >
        
        <BrowserRouter>
        <Routes>

          <Route  path='/' element={<Login/>}/>
          <Route  path='/register' element={<RegistrationUser/>}/>
          <Route  path='/details' element={<DetailsUser/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
