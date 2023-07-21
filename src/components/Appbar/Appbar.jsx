import { Container, Header, Link } from "./Appbar.styled";

export const Appbar = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Profile
          </Link>
          <Link to="Account">My Account</Link>
        </nav>
      </Header>
    </Container>
  );
};
