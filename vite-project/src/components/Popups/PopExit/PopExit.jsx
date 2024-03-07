import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopExit.styled";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
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
  );
}
