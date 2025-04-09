import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Accueil</Link>
      <Link to="/login" style={{ marginRight: '1rem' }}>Connexion</Link>
      <Link to="/profile">Profil</Link>
    </nav>
  );
};

export default Navbar;