// hooks/useAuth.ts
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuthContext } from '../context/AuthContext';

// hooks/useAuth.ts
export const useAuth = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
  
    const handleLogin = async (email: string, password: string) => {
      try {
        const user = await loginUser(email, password);
        login(user);
        navigate('/home'); // 👈 redirige a /home
      } catch (error:any) {
        alert(error.message || 'Error al iniciar sesión');
      }
    };
  
    return { handleLogin };
  };
