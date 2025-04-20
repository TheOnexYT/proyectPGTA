// hooks/useAuth.ts
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuthStore } from '../stores/useAuthStore';

// hooks/useAuth.ts
export const useAuth = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();
  
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
