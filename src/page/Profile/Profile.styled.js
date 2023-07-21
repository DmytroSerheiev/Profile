import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
  border-radius: ${p => p.theme.normal};
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orange;
  }
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Tittle = styled.h1`
  text-align: center;
  color: ${p => p.theme.colors.accent};
`;
