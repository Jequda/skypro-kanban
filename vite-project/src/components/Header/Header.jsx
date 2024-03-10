import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const { user } = useUser();
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }

  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./public/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
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
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
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
  );
}

export default Header;
