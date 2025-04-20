import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { Home } from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Computers from './pages/inventario/Computers/Computers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/computers"
          element={

            <Computers />

          }
        />
      </Routes>
    </Router>
  );
};

export default App;