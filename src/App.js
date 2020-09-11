import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Route path='/' exact><ExercisesList /></Route>
      <Route path='/edit/:id' exact><EditExercise /></Route>
      <Route path='/create' exact><CreateExercise /></Route>
      <Route path='/user' exact><CreateUser /></Route>
    </Router>
  );
}

export default App;
