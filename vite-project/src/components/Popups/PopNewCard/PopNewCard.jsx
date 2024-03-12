import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
import { postTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { topicHeader } from "../../../lib/topic";
import { useTasks } from "../../../hooks/useCards";
import { useThemes } from "../../../hooks/useThemes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../../styled/Common/Global.styled";

function PopNewCard() {
  const { themeMode } = useThemes();
  const { setCards } = useTasks();
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    status: "Без статуса",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };

    await postTodo({
      title: taskData.title,
      description: taskData.description,
      topic: taskData.topic,
      status: taskData.status,
      date: taskData.date,
      token: user.token,
    })
      .then((data) => {
        setCards(data.tasks);
        console.log(data.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <S.PopNewCard>
        <S.Container>
          <S.Block>
            <S.Content>
              <S.Title>Создание задачи</S.Title>
              <Link to={appRoutes.MAIN}>
                <S.Close>✖</S.Close>
              </Link>
              <S.Wrap>
                <S.Form
                  className="pop-new-card__form form-new"
                  id="formNewCard"
                  action="#"
                >
                  <S.FormBlock>
                    <S.SubTitle>Название задачи</S.SubTitle>
                    <S.FormNewInput
                      value={newTask.title}
                      onChange={handleInputChange}
                      type="text"
                      name="title"
                      placeholder="Введите название задачи..."
                      autoFocus=""
                    />
                  </S.FormBlock>
                  <S.FormBlock>
                    <S.SubTitle>Описание задачи</S.SubTitle>
                    <S.FormNewArea
                      value={newTask.description}
                      onChange={handleInputChange}
                      name="description"
                      placeholder="Введите описание задачи..."
                    />
                  </S.FormBlock>
                </S.Form>
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </S.Wrap>
              <S.Categories>
                <S.CategoriesSubtitle>Категория</S.CategoriesSubtitle>
                <S.PopCategoriesThemes>
                  <S.RadioToolbarInput
                    type="radio"
                    id="WebDesign"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <S.RadioToolbarLabel
                    htmlFor="WebDesign"
                    $themeColor={topicHeader["Web Design"]}
                  >
                    Web Design
                  </S.RadioToolbarLabel>

                  <S.RadioToolbarInput
                    type="radio"
                    id="Research"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <S.RadioToolbarLabel
                    htmlFor="Research"
                    $themeColor={topicHeader["Research"]}
                  >
                    Research
                  </S.RadioToolbarLabel>

                  <S.RadioToolbarInput
                    type="radio"
                    id="Copywriting"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <S.RadioToolbarLabel
                    htmlFor="Copywriting"
                    $themeColor={topicHeader["Copywriting"]}
                  >
                    Copywriting
                  </S.RadioToolbarLabel>
                </S.PopCategoriesThemes>
              </S.Categories>
              <S.CreateButton onClick={handleFormSubmit}>
                Создать задачу
              </S.CreateButton>
            </S.Content>
          </S.Block>
        </S.Container>
      </S.PopNewCard>
    </ThemeProvider>
  );
}

export default PopNewCard;
