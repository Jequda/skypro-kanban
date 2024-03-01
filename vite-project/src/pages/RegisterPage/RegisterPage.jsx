import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { SignUp } from "../../api";

export default function Register({ login }) {
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
        console.log(data.user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                value={registerData.name}
                onChange={handleInputChange}
                className="modal__input first-name"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
              />
              <input
                value={registerData.login}
                onChange={handleInputChange}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                value={registerData.password}
                onChange={handleInputChange}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button
                onClick={handleRegister}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                <span>Зарегистрироваться</span>{" "}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?
                  <Link to={appRoutes.LOGIN}>
                    <span>Войдите здесь</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
