import React, { useState } from 'react';

const ProfileUpdateForm = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update profile
    console.log('Profile updated:', profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileUpdateForm;