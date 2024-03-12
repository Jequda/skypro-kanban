import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { SignUp } from "../../api";
import { useUser } from "../../hooks/useUser";
import * as S from "./RegisterPage.styled";
import { useThemes } from "../../hooks/useThemes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styled/Common/Global.styled";

export default function Register() {
  const { login } = useUser();
  const navigate = useNavigate();
  const { themeMode } = useThemes();
  const [alert, setAlert] = useState(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isIncorrectData, setIsIncorrectData] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setRegisterData({
      ...registerData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    await SignUp(registerData)
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
        <S.ContainerSignup>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>Регистрация</S.ModalTitle>
              <S.ModalFormLogin>
                <S.ModalInput
                  onKeyDown={cancelError}
                  $isButtonLoading={isIncorrectData}
                  value={registerData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  onKeyDown={cancelError}
                  $isButtonLoading={isIncorrectData}
                  value={registerData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={registerData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <S.AlertMessage>{alert}</S.AlertMessage>
                <S.ModalButton
                  disabled={isButtonLoading}
                  $isButtonLoading={isButtonLoading}
                  onClick={handleRegister}
                >
                  Зарегистрироваться
                </S.ModalButton>
                <S.ModalFormGroup>
                  Уже есть аккаунт?
                  <Link to={appRoutes.LOGIN}> Войдите здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignup>
      </S.Wrapper>
    </ThemeProvider>
  );
}
