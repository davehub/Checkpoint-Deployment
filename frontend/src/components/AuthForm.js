import { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: type === 'signup' ? '' : undefined
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }}>
      {type === 'signup' && (
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={handleChange}
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        onChange={handleChange}
        required
      />
      <button type="submit">
        {type === 'login' ? 'Se connecter' : 'S\'inscrire'}
      </button>
    </form>
  );
};

export default AuthForm;