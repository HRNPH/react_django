import React from 'react';
import './App.css';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center">
        Simple Django Notes App Desu!
      </h1>

      <section className="mx-10">
        <Notes />
      </section>
    </div>
  );
}

export default App;
