import './Profile.css';

function Profile() {
  return (
    <div className="profile-container fade-in">
      
      {/* Top Section */}
      <div className="profile-header">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="profile-avatar"
        />

        <div className="profile-info">
          <h3>Reddy</h3>
          <button className="btn btn-primary">Edit Profile</button>

          <div className="profile-stats">
            <span><strong>12</strong> posts</span>
            <span><strong>340</strong> followers</span>
            <span><strong>180</strong> following</span>
          </div>

          <p className="profile-bio">
            React Developer 🚀 <br />
            Learning Vite + UI Design ✨
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="profile-posts">
        {[1,2,3,4,5,6].map((id) => (
          <img
            key={id}
            src={`https://picsum.photos/300?random=${id}`}
            alt="post"
            className="profile-post-img"
          />
        ))}
      </div>

    </div>
  );
}

export default Profile;
