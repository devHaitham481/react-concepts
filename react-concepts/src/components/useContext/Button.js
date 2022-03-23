import React from "react";
import styled from "styled-components";
import useTheme, { themes } from "./ThemeContext";
const Button = () => {
  // here we could access theme and setTheme which was inside the
  // useTheme hook that we defined in the ThemeContext component : )
  const { theme, setTheme } = useTheme();
  return (
    <StyledButton
      onClick={() =>
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }
      color={theme.foreground}
      background={theme.background}
    >
      I am styled by theme context!
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.foreground};
  padding: 12px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  display: grid;
  justify-self: center;
  cursor: pointer;
`;
