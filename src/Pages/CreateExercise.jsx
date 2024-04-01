import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ExerciseItem } from '../Components/ExerciseItem';


export const CreateExercise = () => {
  const [exercise, setexercise] = useState({
    title: '',
    details: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setexercise({
      ...exercise,
      [e.target.name]: e.target.value,
    });
  };

  const handleExerciseCreation = e => {
    e.preventDefault();
    const newExercise = {
      title: exercise.title,
      details: exercise.details,
      complete: false,
      id: Math.floor(Math.random() * 10000),
    };

    localStorage.setItem(`EXERCISE-PLANNER-${newExercise.id}`,
      JSON.stringify(newExercise)
    
  );
  navigate('/home');
};


return(
  <div>
  <form onSubmit={handleExerciseCreation}>
    <label>title</label>
    <input
       name='title'
      maxLength='15'
      type='text'
      onChange={handleChange}
      value={exercise.title}
      required
      />
    
      <label>details</label>
      <textarea
         name='details'
        maxLength='15'
        cols='30'
        rows='15'
        onChange={handleChange}
        value={exercise.details}
        required
        ></textarea>
    <button>add exercise</button>
  </form>
  </div>
);

}