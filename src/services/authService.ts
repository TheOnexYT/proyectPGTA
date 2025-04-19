// services/authService.ts
const users = [
    { email: 'juanse@gmail.com', password: '1234', name: 'Juanse' },
    { email: 'maria@test.com', password: 'abcd', name: 'María' },
    { email: 'test@test.com', password: '1234', name: 'Test User' }
  ];


export const loginUser = async (email: string, password: string) => {

    if(!email || !password) {
        throw new Error('Email y contraseña son requeridos');
    }
    
    // Fake login con hardcoded data
    const user = users.find(u => u.email === email && u.password === password);
    if (user) return user;
    throw new Error('Credenciales incorrectas');
  };
  