import { Container } from "./Container";
import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
