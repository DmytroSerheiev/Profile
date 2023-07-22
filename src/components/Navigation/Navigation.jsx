import React from 'react';
import { CustomLink, NavList, ListItem, LogoImage } from './Navigation.styled';
import materioLogo from '../../img/Logo.jpg';

export const Navigation = () => {
  return (
    <NavList>
      <ListItem>
        <CustomLink to="/">
          <LogoImage src={materioLogo} alt="Materio Logo" />
          MATERIO
        </CustomLink>
      </ListItem>
    </NavList>
  );
};
