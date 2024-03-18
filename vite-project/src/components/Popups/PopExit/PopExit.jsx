import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopExit.styled";
import { useThemes } from "../../../hooks/useThemes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../../styled/Common/Global.styled";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const { themeMode } = useThemes();
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <S.PopExit>
        <S.Container>
          <S.Block>
            <S.Title>Выйти из аккаунта?</S.Title>
            <S.Form>
              <S.ButtonYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.LOGIN);
                }}
              >
                Да, выйти
              </S.ButtonYes>

              <S.ButtonNo>
                <Link to={appRoutes.MAIN}>Нет, остаться</Link>
              </S.ButtonNo>
            </S.Form>
          </S.Block>
        </S.Container>
      </S.PopExit>
    </ThemeProvider>
  );
}
