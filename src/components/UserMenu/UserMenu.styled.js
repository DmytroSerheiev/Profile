import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export const UserGrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-family: Roboto;
  margin-right: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;

  margin-right: 200px;
  font-weight: bold;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const ModalOverlay = styled.div`
  /* Your modal overlay styles here */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  display: block;
  /* margin: 0.5em auto; */
  position: relative;
  /* border-style: inset; */
  border-width: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ccc;
  }
`;
export const CustomLink = styled(Link)`
  padding-left: 10px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: flex; /* Use flex to align items horizontally */
  align-items: center; /* Center the items vertically */
  gap: 8px; /* Add some spacing between the icon and text */

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContent = styled.div`
  /* Styles for the modal content */
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #fff;
  padding: 1px;
  border-radius: 4px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  flex-direction: column; /* Set the direction to column */

  /* Profile and Settings button styles */
  ${CustomLink}:not(:last-child) {
    margin-bottom: 15px;
  }

  /* Push the Logout button to the bottom */
  margin-top: auto;
`;

export const ModalButton = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: flex; /* Use flex to align items horizontally */
  align-items: center; /* Center the items vertically */
  gap: 8px; /* Add some spacing between the icon and text */

  &:hover {
    text-decoration: underline;
  }

  /* Push the Logout button to the bottom */
  margin-top: auto;
`;
export const AvatarMoodal = styled.div`
  margin-bottom: 15px;
  padding-left: 10px;

  display: block;
  /* margin: 0.5em auto; */
  position: relative;
  /* border-style: inset; */
  border-width: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ccc;
  }
`;
export const ModalText = styled.div`
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  display: flex; /* Use flex to align items horizontally */
  align-items: center; /* Center the items vertically */
  gap: 8px; /* Add some spacing between the icon and text */

  /* Align the icon with the text */
  svg {
    vertical-align: middle;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Set the gap between the icons to 10px */
  margin-right: 10px; /* Set the right margin to 10px */

  /* Add styles to align the icons horizontally */
  svg {
    vertical-align: middle;
  }
`;
