import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar';
import HomePage from './Pages/HomePage';
import {CreateExercise} from './Pages/CreateExercise';
import {EditExercise} from './Pages/EditExercise';
function App() {
  return(
    <div className='App'>
    <Navbar />
      <Routes>
      <Route path='/home' element={<HomePage />} />
        <Route path='/create-exercise' element={<CreateExercise />} />
        <Route path='/exercises/:id/edit' element={<EditExercise />} />
      </Routes>
    </div>
  )
}

export default App;
