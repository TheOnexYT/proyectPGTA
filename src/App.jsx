import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { Home } from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Computers from './pages/inventario/computers/Computers';
import Monitores from './pages/inventario/monitores/Monitores';
import Tickets from './pages/tickets/Tickets';


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

          <Route path="/tickets"
            element={
              <Tickets/>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;