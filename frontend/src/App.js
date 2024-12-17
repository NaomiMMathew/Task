
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import MenuDrinks from './components/MenuDrinks';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes> 
         <Route path='/' element={<MenuDrinks/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
