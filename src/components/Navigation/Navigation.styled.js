import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(NavLink)`
  margin-left: 30px;
  margin-top: 60px;
  letter-spacing: 0.15px;
  font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.125rem;
  color: rgba(58, 53, 65, 0.87);
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  /* Remove the underline on hover */
  text-decoration: none;

  &:hover {
    color: #b3e5fc;
    /* Add the underline effect on hover */
    border-bottom: 2px solid;
  }
`;

export const NavList = styled.ul`
  /* Add styles for the NavList */
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Set flex-direction to column to arrange items vertically */
`;
export const ListItem = styled.li`
  margin-right: 10px;
  list-style: none;
`;
