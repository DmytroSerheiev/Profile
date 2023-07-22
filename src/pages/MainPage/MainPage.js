import React from 'react';

import { Container, BannerImage } from './MainPage.styled';
import defaultAvatar from '../../img/profile-banner.png';

export default function MainPage() {
  return (
    <Container>
      <BannerImage src={defaultAvatar} alt="Profile Banner" />
    </Container>
  );
}
