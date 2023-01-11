import './App.css';
import React from 'react';
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Create from './Components/StuCreate';
import Dashboard from './Components/Dashboard';
import StuStuList from './Components/StuStuList';
import About from './About';
import ContextState from './Context/ContextState';
import AuthPage from './Components/AuthPage';
import Stulist from './Components/Stulist';
import StudentEdit from './Components/StudentEdit';

function App() {
  return (
    <ContextState >
    <BrowserRouter>
      <Navbar  />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='create' element={<Create />}  />
          <Route path='students' element={<Stulist />}  />
          <Route path='students/edit/:index' element={<StudentEdit />}  />
          <Route path='about' element={<About />}  />
          <Route path='login' element={<AuthPage  />}></Route>
        </Routes> 

      </div>
    </BrowserRouter>
    </ContextState>
  );
}

export default App;
