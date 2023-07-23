import React, { useState } from 'react';
import defaultAvatar from '../../img/avatar.png';

const AvatarSelector = ({ onSelectAvatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
        onSelectAvatar(reader.result); // Повідомляємо батьківський компонент про новий URL аватара
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <img
        src={avatarUrl}
        alt="Аватар"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <input type="file" accept="image/*" onChange={handleAvatarChange} />
    </div>
  );
};

export default AvatarSelector;
