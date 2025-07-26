import { useState } from 'react';
import TrainerList from './TrainerList';
import { Link , Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Welcome to Trainers App</h1>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/trainers">Trainers List</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
