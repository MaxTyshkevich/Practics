import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({ to: "/" })`
  color: var(--colors-text);
  font-size: var(--fa-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwithcer = styled.div`
  color: var(--colors-text);
  font-size: var(--fa-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwithcer onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoon size="14px" />
            ) : (
              <IoMoonOutline size="14px" />
            )}

            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwithcer>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
