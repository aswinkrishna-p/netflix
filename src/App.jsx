import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import './App.css'
import RowPost from './Components/RowPost/RowPost';
import { action, originals, romance } from './urls';

function App(props) {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title = 'Netflix originals'/>
      <RowPost url = {action} title = 'Actions' isSmall/>
      <RowPost url = {romance} title = 'Romance' isSmall/>
    
    </div>
  );
}

export default App;
