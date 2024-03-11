import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { GlobalStyle } from "../../styled/Common/Global.styled";
import { useThemes } from "../../hooks/useThemes";
import { ThemeProvider } from "styled-components";

function Header() {
  const {
    theme,
    mountedComponent,
    setMountedComponent,
    themeMode,
    themeToggler,
  } = useThemes();
  const [isOpened, setIsOpened] = useState(false);
  const { user } = useUser();
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  function toggleTheme() {
    themeToggler();
    setMountedComponent(true);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <S.StyledHeader>
        <Container>
          <S.HeaderBlock>
            <S.HeaderLogo>
              <Link to={appRoutes.MAIN}>
                {theme === "light" ? (
                  <img src={"/public/logo.png"} alt="logo" />
                ) : (
                  <img src={"/public/logo_dark.png"} alt="logo" />
                )}
              </Link>
            </S.HeaderLogo>
            <S.HeaderNav>
              <Link to={appRoutes.NEWTASK}>
                <S.ButtonNewMain>Создать новую задачу</S.ButtonNewMain>
              </Link>
              <S.HeaderUser onClick={togglePopup}>{user.name}</S.HeaderUser>
              {isOpened && (
                <S.UserSetTarget>
                  <S.PopUserSetName>{user.name}</S.PopUserSetName>
                  <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
                  <S.PopUserSetTheme>
                    Темная тема
                    <S.DarkTheme
                      onClick={toggleTheme}
                      type="checkbox"
                      defaultChecked={!mountedComponent}
                    />
                  </S.PopUserSetTheme>
                  <Link to={appRoutes.EXIT}>
                    <S.PopExitButton>Выйти</S.PopExitButton>
                  </Link>
                </S.UserSetTarget>
              )}
            </S.HeaderNav>
          </S.HeaderBlock>
        </Container>
      </S.StyledHeader>
    </ThemeProvider>
  );
}

export default Header;
