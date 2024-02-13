import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
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
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="./public/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.ButtonNewMain onClick={addCard}>
              Создать новую задачу
            </S.ButtonNewMain>
            <S.HeaderUser onClick={togglePopup}>Ivan Ivanov</S.HeaderUser>
            {isOpened && (
              <S.UserSetTarget>
                {/* <a href="">x</a> */}
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <S.PopExitButton>
                  <a href="#popExit">Выйти</a>
                </S.PopExitButton>
              </S.UserSetTarget>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
