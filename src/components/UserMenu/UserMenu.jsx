import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks';
import {
  UserGrap,
  StyledAvatar,
  Text,
  ModalContent,
  ModalButton,
  NavList,
  ListItem,
  CustomLink,
  ModalOverlay,
} from './UserMenu.styled';
import { deepPurple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Імпортуємо іконку

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(() => {
    return localStorage.getItem('avatarUrl') || null;
  });

  useEffect(() => {
    localStorage.setItem('avatarUrl', avatarUrl);
  }, [avatarUrl]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleModalClose();
  };

  useEffect(() => {
    // Додаємо клас "modal-open" для body, якщо модальне вікно відкрите
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UserGrap>
      <input
        type="file"
        accept="image/*"
        id="avatar-input"
        style={{ display: 'none' }}
        onChange={handleAvatarChange}
      />

      {/* Іконка користувача */}
      <StyledAvatar
        src={avatarUrl || undefined}
        sx={{ bgcolor: deepPurple[500] }}
        onClick={() => setModalOpen(true)} // Відкриваємо модальне вікно при кліку на аватарку
      >
        {!avatarUrl ? <PersonAddIcon /> : <AccountCircleIcon />}{' '}
        {/* Відображаємо іконку, якщо немає аватару */}
      </StyledAvatar>

      {user && <Text>{user.name}</Text>}

      {isModalOpen && (
        <ModalOverlay className="modal-overlay" onClick={handleModalClose}>
          <ModalContent
            style={{ width: 230, height: 360 }}
            onClick={e => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <label htmlFor="avatar-input">
                <StyledAvatar
                  src={avatarUrl || undefined}
                  sx={{ bgcolor: deepPurple[500] }}
                  style={{ marginRight: 10 }}
                >
                  {!avatarUrl ? <PersonAddIcon /> : null}{' '}
                  {/* Відображаємо іконку, якщо немає аватару */}
                </StyledAvatar>
              </label>
              {user && <Text>{user.name}</Text>}
            </div>

            <NavList>
              <ListItem>
                <CustomLink to="/">
                  <PermIdentityIcon style={{ marginRight: 8 }} />
                  Профіль
                </CustomLink>
              </ListItem>
              {isLoggedIn && (
                <ListItem>
                  <CustomLink to="/contacts">
                    <SettingsIcon style={{ marginRight: 8 }} />
                    Налаштування
                  </CustomLink>
                </ListItem>
              )}
            </NavList>

            <ModalButton onClick={handleLogout}>
              <LogoutIcon />
              Вийти
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </UserGrap>
  );
};
