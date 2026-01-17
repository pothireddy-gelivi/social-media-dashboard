import './Home.css';

function Home() {
    const stories = [
    { id: 1, user: 'reddy' },
    { id: 2, user: 'admin' },
    { id: 3, user: 'user_1' },
    { id: 4, user: 'user_2' },
    { id: 5, user: 'user_3' },
    { id: 6, user: 'user_4' },
    { id: 7, user: 'user_5' },
  ];
  const posts = [
    {
      id: 1,
      user: 'reddy',
      image: 'https://picsum.photos/600/400?random=1',
      caption: 'Learning React + Vite 🚀'
    },
    {
      id: 2,
      user: 'admin',
      image: 'https://picsum.photos/600/400?random=2',
      caption: 'Building beautiful UI with Bootstrap 💙'
    },
    {
      id: 3,
      user: 'user_123',
      image: 'https://picsum.photos/600/400?random=3',
      caption: 'Instagram-style feed looks clean ✨'
    },
    {
      id: 1,
      user: 'reddy',
      image: 'https://picsum.photos/600/400?random=4',
      caption: 'Learning React + Vite 🚀'
    },
    {
      id: 2,
      user: 'admin',
      image: 'https://picsum.photos/600/400?random=5',
      caption: 'Building beautiful UI with Bootstrap 💙'
    },
    {
      id: 3,
      user: 'user_123',
      image: 'https://picsum.photos/600/400?random=6',
      caption: 'Instagram-style feed looks clean ✨'
    }
  ];

  return (
    <div className="insta-container">
         {/* 🔥 STORIES */}
      <div className="stories fade-in">
        {stories.map(story => (
          <div className="story" key={story.id}>
            <div className="story-avatar">
              {story.user.charAt(0).toUpperCase()}
            </div>
            <span className="story-name">{story.user}</span>
          </div>
        ))}
      </div>
      {posts.map(post => (
        <div className="insta-card fade-in" key={post.id}>
          
          {/* Header */}
          <div className="insta-header">
            <div className="insta-avatar">
              {post.user.charAt(0).toUpperCase()}
            </div>
            <span className="insta-username">{post.user}</span>
          </div>

          {/* Image */}
          <img
            src={post.image}
            alt="post"
            className="insta-image"
          />

          {/* Actions */}
          <div className="insta-actions">
            <span>❤️</span>
            <span>💬</span>
            <span>📤</span>
          </div>

          {/* Caption */}
          <div className="insta-caption">
            <strong>{post.user}</strong> {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
