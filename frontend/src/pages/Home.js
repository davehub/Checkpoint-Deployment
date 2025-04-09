import { useEffect, useState } from 'react';
import Post from '../components/Post';
import { fetchPosts } from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts récents</h1>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;