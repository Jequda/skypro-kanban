import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { StyledButton } from "../../../styled/common/Common.styled";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useTasks } from "../../../hooks/useCards";
import { useState } from "react";
import { PutTodo, deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { topicHeader } from "../../../lib/topic";
import { format } from "date-fns";

function PopBrowse() {
  const { cards, setCards } = useTasks();
  const { id } = useParams();
  const card = cards?.find((el) => el._id === id);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState(null);
  const [editTask, setEditTask] = useState({
    title: card?.title,
    description: card?.description,
    topic: card?.topic,
    status: card?.status,
  });
  console.log(format(card?.date, "dd.MM.yy"));

  const handleEditCard = async (e) => {
    e.preventDefault();
    setIsEdit((prev) => !prev);
  };

  const handleDeletecard = async (e) => {
    e.preventDefault();
    await deleteTodo({ id: id, token: user.token })
      .then((data) => {
        setCards(data?.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setEditTask({
      ...editTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
    console.log(editTask);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      date: selectedDate,
    };

    await PutTodo({
      id: id,
      title: taskData.title,
      description: taskData.description,
      topic: taskData.topic,
      status: taskData.status,
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

  return (
    <S.PopBrowse>
      <S.Container>
        <S.Block>
          <S.Content>
            {isEdit ? (
              <>
                <S.TopBlock>
                  Название задачи:
                  <S.TitleInput
                    name="title"
                    type="text"
                    value={editTask.value}
                    onChange={handleInputChange}
                    defaultValue={card?.title}
                  />
                  <S.TopCategory $themeColor={topicHeader[card?.topic]}>
                    {card?.topic}
                  </S.TopCategory>
                </S.TopBlock>
                <S.Status>
                  <S.Subtitle>Статус</S.Subtitle>
                  <S.Themes>
                    <S.PopCategoriesThemes>
                      <S.RadioToolbarInput
                        type="radio"
                        id="NoStatus"
                        name="status"
                        value="Без статуса"
                        onChange={handleInputChange}
                        defaultChecked={"Без статуса" === card?.status}
                      />
                      <S.RadioToolbarLabel htmlFor="NoStatus">
                        Без статуса
                      </S.RadioToolbarLabel>
                      <S.RadioToolbarInput
                        type="radio"
                        id="NeedComplete"
                        name="status"
                        value="Нужно сделать"
                        onChange={handleInputChange}
                        defaultChecked={"Нужно сделать" === card?.status}
                      />
                      <S.RadioToolbarLabel htmlFor="NeedComplete">
                        Нужно сделать
                      </S.RadioToolbarLabel>
                      <S.RadioToolbarInput
                        type="radio"
                        id="InWork"
                        name="status"
                        value="В работе"
                        onChange={handleInputChange}
                        defaultChecked={"В работе" === card?.status}
                      />
                      <S.RadioToolbarLabel htmlFor="InWork">
                        В работе
                      </S.RadioToolbarLabel>
                      <S.RadioToolbarInput
                        type="radio"
                        id="Testing"
                        name="status"
                        value="Тестирование"
                        onChange={handleInputChange}
                        defaultChecked={"Тестирование" === card?.status}
                      />
                      <S.RadioToolbarLabel htmlFor="Testing">
                        Тестирование
                      </S.RadioToolbarLabel>
                      <S.RadioToolbarInput
                        type="radio"
                        id="Ready"
                        name="status"
                        value="Готово"
                        onChange={handleInputChange}
                        defaultChecked={"Готово" === card?.status}
                      />
                      <S.RadioToolbarLabel htmlFor="Ready">
                        Готово
                      </S.RadioToolbarLabel>
                    </S.PopCategoriesThemes>
                  </S.Themes>
                </S.Status>
                <S.Wrap>
                  <S.Form>
                    <S.FormBlock>
                      <S.Subtitle>Описание задачи</S.Subtitle>
                      <S.FormArea
                        name="description"
                        value={editTask.description}
                        defaultValue={card?.title}
                        onChange={handleInputChange}
                      />
                    </S.FormBlock>
                  </S.Form>
                  <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </S.Wrap>
                <S.ButtonBrowse>
                  <S.ButtonGroup>
                    <S.ButtonEdit onClick={handleFormSubmit}>
                      Сохранить
                    </S.ButtonEdit>
                    <S.ButtonEdit onClick={handleEditCard}>
                      Отменить
                    </S.ButtonEdit>
                    <S.ButtonEdit onClick={handleDeletecard}>
                      Удалить задачу
                    </S.ButtonEdit>
                  </S.ButtonGroup>
                  <Link to={appRoutes.MAIN}>
                    <StyledButton>Закрыть</StyledButton>
                  </Link>
                </S.ButtonBrowse>
              </>
            ) : (
              <>
                <S.TopBlock>
                  Название задачи: {card?.title}
                  <S.TopCategory $themeColor={topicHeader[card?.topic]}>
                    {card?.topic}
                  </S.TopCategory>
                </S.TopBlock>
                <S.Status>
                  <S.Subtitle>Статус</S.Subtitle>
                  <S.Themes>
                    <S.StatusTheme>{card?.status}</S.StatusTheme>
                  </S.Themes>
                </S.Status>
                <S.Wrap>
                  <S.Form>
                    <S.FormBlock>
                      <S.Subtitle>Описание задачи</S.Subtitle>
                      <S.FormArea readOnly={true} value={card?.description} />
                    </S.FormBlock>
                  </S.Form>
                  <Calendar selectedDate={card?.date} />
                </S.Wrap>
                <S.ButtonBrowse>
                  <S.ButtonGroup>
                    <S.ButtonEdit onClick={handleEditCard}>
                      Редактировать задачу
                    </S.ButtonEdit>
                    <S.ButtonEdit onClick={handleDeletecard}>
                      Удалить задачу
                    </S.ButtonEdit>
                  </S.ButtonGroup>
                  <Link to={appRoutes.MAIN}>
                    <StyledButton>Закрыть</StyledButton>
                  </Link>
                </S.ButtonBrowse>
              </>
            )}
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopBrowse>
  );
}

export default PopBrowse;
