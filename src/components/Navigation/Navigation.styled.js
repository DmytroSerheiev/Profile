import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(NavLink)`
  display: flex; /* Додаємо flex для розміщення картинки та тексту в один рядок */
  align-items: center; /* Вирівнюємо елементи по вертикалі по центру */
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
  padding-left: 10px;
  margin-right: 10px;
  list-style: none;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 35px;
  margin-right: 10px; /* Збільшуємо відстань між картинкою та текстом */
`;
