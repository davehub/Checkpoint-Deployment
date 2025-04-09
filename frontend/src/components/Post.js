const Post = ({ post }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <h3>{post.content}</h3>
        <p>Posté par: {post.author}</p>
      </div>
    );
  };
  
  export default Post;  