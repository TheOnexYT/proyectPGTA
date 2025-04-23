import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuthStore } from '../stores/useAuthStore';

export const useAuth = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async (email, password) => {
    try {
      const user = await loginUser(email, password);
      login(user);
      navigate('/home'); // 👈 redirige a /home
    } catch (error) {
      alert(error.message || 'Error al iniciar sesión');
    }
  };

  return { handleLogin };
};
