import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { SignUp } from "../../api";
import { useUser } from "../../hooks/useUser";
import * as S from "./RegisterPage.styled";

export default function Register() {
  const { login } = useUser();
  const navigate = useNavigate();

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
    await SignUp(registerData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Регистрация</S.ModalTitle>
            <S.ModalFormLogin>
              <S.ModalInput
                value={registerData.name}
                onChange={handleInputChange}
                type="text"
                name="name"
                placeholder="Имя"
              />
              <S.ModalInput
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
              <S.ModalButton onClick={handleRegister}>
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
  );
}
