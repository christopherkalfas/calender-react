import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Calendar from "./components/Calendar"
import './App.css';



function App() {
  return (
    <div className="App">
      <Calendar />
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
