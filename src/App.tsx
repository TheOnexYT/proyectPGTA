
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Home } from './pages/Home';
import Computers from './pages/inventario/Computers/Computers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/computers" element={<Computers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
