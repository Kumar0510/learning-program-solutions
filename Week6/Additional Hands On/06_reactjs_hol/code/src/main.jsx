import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TrainerList from './TrainerList';
import TrainerDetails from './TrainerDetails'; // 👈
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h2>Welcome to Our Academy Trainer List</h2>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="trainers" element={<TrainerList />} />
          <Route path="trainer/:id" element={<TrainerDetails />} /> {/* 👈 */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
