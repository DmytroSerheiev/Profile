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
  margin-right: 10px;
  font-weight: bold;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const ModalContent = styled.div`
  /* Styles for the modal content */
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;

  display: flex;
  flex-direction: column; /* Set the direction to column */
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
`;
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const CustomLink = styled(Link)`
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

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; /* Add some spacing between items */
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
