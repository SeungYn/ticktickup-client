import path from 'path';
import React from 'react';
import './App.css';
import SassComponent from './SassComponent';

const API_KEY = 'adbac976fbf66922692022abed6b63e7';
console.log(path.appSrc);
function App() {
  return (
    <div className='App'>
      <SassComponent />
    </div>
  );
}

export default App;
