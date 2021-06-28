import React from 'react';
import './App.css';
import Board from './components/board';


export interface Props {
  something?: string;
}



function App({ something }: Props) {



  return (
    <div className="App">

      <Board />
    </div>
  );
}

export default App;
