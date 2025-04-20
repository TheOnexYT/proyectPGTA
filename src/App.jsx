import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { Home } from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Computers from './pages/inventario/computers/Computers';
import Monitores from './pages/inventario/monitores/Monitores';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              //<ProtectedRoute>
              <Home />
              //</ProtectedRoute>
            }
          />
          <Route path="/computers"
            element={
              <Computers />
            }
          />
          <Route path="/monitores"
            element={
              <Monitores />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;