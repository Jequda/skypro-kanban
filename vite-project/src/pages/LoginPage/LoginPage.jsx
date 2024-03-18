import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { SignIn } from "../../api";
import { useUser } from "../../hooks/useUser";
import * as S from "./LoginPage.styled";
import { useThemes } from "../../hooks/useThemes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styled/Common/Global.styled";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const { themeMode } = useThemes();
  const [alert, setAlert] = useState(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isIncorrectData, setIsIncorrectData] = useState(false);

  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    await SignIn(loginData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        setAlert(error.message);
        setIsIncorrectData(true);
      });
  };
  const cancelError = () => {
    setIsButtonLoading(false);
    setIsIncorrectData(false);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <S.Wrapper>
        <S.ContainerSignin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>Вход</S.ModalTitle>
              <S.ModalFormLogin>
                <S.ModalInput
                  onKeyDown={cancelError}
                  $isButtonLoading={isIncorrectData}
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  onKeyDown={cancelError}
                  $isButtonLoading={isIncorrectData}
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <S.AlertMessage>{alert}</S.AlertMessage>
                <S.ModalButton
                  disabled={isButtonLoading}
                  $isButtonLoading={isButtonLoading}
                  onClick={handleLogin}
                >
                  Войти
                </S.ModalButton>
                <S.ModalFormGroup>
                  Нужно зарегистрироваться?
                  <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignin>
      </S.Wrapper>
    </ThemeProvider>
  );
}
