import React from 'react';
import { CustomLink, NavList, ListItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavList>
      <ListItem>
        <CustomLink to="/">MATERIO</CustomLink>
      </ListItem>
    </NavList>
  );
};
