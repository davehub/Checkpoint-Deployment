import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { login } from '../api';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      alert('Erreur de connexion');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;