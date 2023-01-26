import { useState } from 'react';
import './index.css';
import Employee from './component/Employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import Header from './component/Header';
import Employees from './pages/Employess';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './component/404';

function App() {
  
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees/>} />
          <Route path='/customers' element={<Customers/>} />  
          <Route 
          path='/dictionary/:search' 
          element={<Definition/>}/>
          <Route path='/dictionary' element={<Dictionary/>}/>
          <Route path='/404' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  );

}

export default App;
