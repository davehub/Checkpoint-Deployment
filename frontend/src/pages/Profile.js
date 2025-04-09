import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../api';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetchUserProfile();
        setUser(response.data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };
    loadProfile();
  }, []);

  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Profil de {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;