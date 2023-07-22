import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks';
import defaultAvatar from '../../img/avatar.png';
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
  AvatarMoodal,
  ModalText,
  Icons,
} from './UserMenu.styled';
import { deepPurple } from '@mui/material/colors';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Import the icon
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

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
    // Add the "modal-open" class to the body if the modal is open
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
      <Icons>
        <SearchOutlinedIcon />
        <TranslateOutlinedIcon />
        <BedtimeOutlinedIcon />
        <DashboardCustomizeOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
      </Icons>

      {/* User Icon */}
      <StyledAvatar
        src={avatarUrl || defaultAvatar}
        sx={{ bgcolor: deepPurple[500] }}
        onClick={() => setModalOpen(true)} // Open the modal on avatar click
      >
        {!avatarUrl ? <PersonAddIcon /> : null}{' '}
        {/* Display an icon if there is no avatar */}
      </StyledAvatar>

      {/* {user && <Text>{user.name}</Text>} */}

      {isModalOpen && (
        <ModalOverlay className="modal-overlay" onClick={handleModalClose}>
          <ModalContent
            style={{ width: 230, height: 360 }}
            onClick={e => e.stopPropagation()}
          >
            <AvatarMoodal
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
                  {/* Display an icon if there is no avatar */}
                </StyledAvatar>
              </label>
              {user && <Text>{user.name}</Text>}
            </AvatarMoodal>

            <NavList>
              <ListItem>
                <CustomLink to="/">
                  <PermIdentityIcon style={{ marginRight: 8 }} />
                  Profile
                </CustomLink>
                <ModalText>
                  <MailOutlinedIcon />
                  Inbox
                </ModalText>
                <ModalText>
                  <ChatBubbleOutlineOutlinedIcon />
                  Chat
                </ModalText>
              </ListItem>
              {isLoggedIn && (
                <ListItem>
                  <CustomLink to="/contacts">
                    <SettingsIcon style={{ marginRight: 8 }} />
                    Settings
                  </CustomLink>
                  <ModalText>
                    <MonetizationOnOutlinedIcon />
                    Pricing
                  </ModalText>
                  <ModalText>
                    <LiveHelpOutlinedIcon />
                    FAQ
                  </ModalText>
                </ListItem>
              )}
            </NavList>

            <ModalButton onClick={handleLogout}>
              <LogoutIcon />
              Logout
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </UserGrap>
  );
};
