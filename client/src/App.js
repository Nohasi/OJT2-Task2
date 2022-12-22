import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FibonacciPage } from './components/FibonacciPage';

function App() {
  // App automatically navigates users to the '/fibonacci' path
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="fibonacci" element={<FibonacciPage />}/> 
          <Route path="" element={<Navigate to="/fibonacci" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
